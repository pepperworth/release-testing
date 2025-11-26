const express = require('express');
const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { marked } = require('marked');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Datenbank initialisieren
const db = new Database('release-testing.db');

// Datenbank-Schema erstellen
db.exec(`
  CREATE TABLE IF NOT EXISTS test_runs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    completed_at DATETIME,
    status TEXT DEFAULT 'active',
    total_tests INTEGER DEFAULT 0,
    completed_tests INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS test_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    run_id INTEGER NOT NULL,
    category TEXT NOT NULL,
    test_number TEXT NOT NULL,
    test_name TEXT NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT 0,
    completed_at DATETIME,
    FOREIGN KEY (run_id) REFERENCES test_runs(id) ON DELETE CASCADE
  );

  CREATE INDEX IF NOT EXISTS idx_run_id ON test_items(run_id);
`);

// Funktion zum Parsen der User Stories aus Markdown
function parseUserStories(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const tests = [];

  let inSummaryTable = false;
  let currentCategory = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Suche nach der Zusammenfassungs-Tabelle
    if (line.includes('| Nr. | Kategorie | Test | Status |')) {
      inSummaryTable = true;
      i++; // Überspringe die Trennlinie
      continue;
    }

    // Ende der Zusammenfassungs-Tabelle
    if (inSummaryTable && line === '</details>') {
      break;
    }

    // Parse Tabellenzeilen
    if (inSummaryTable && line.startsWith('|')) {
      const parts = line.split('|').map(p => p.trim()).filter(p => p);

      if (parts.length >= 4) {
        // Prüfe ob es eine Kategorie-Überschrift ist
        if (parts[0].startsWith('**') && parts[0].endsWith('**')) {
          currentCategory = parts[0].replace(/\*\*/g, '');
          continue;
        }

        // Normale Test-Zeile
        const testNumber = parts[0];
        const category = parts[1] || currentCategory;
        const testName = parts[2];

        if (testNumber && testName && testNumber !== 'Nr.' && testNumber !== '--') {
          tests.push({
            number: testNumber,
            category: category,
            name: testName
          });
        }
      }
    }
  }

  return tests;
}

// Funktion zum Laden aller User Story Dateien
function loadAllUserStories() {
  const userStoryFiles = [];
  const files = fs.readdirSync(__dirname);

  files.forEach(file => {
    if (file.includes('user-stories') || file.includes('userstories')) {
      userStoryFiles.push({
        path: path.join(__dirname, file),
        name: file
      });
    }
  });

  const allStories = {};

  userStoryFiles.forEach(file => {
    const stories = parseUserStories(file.path);
    const moduleName = file.name.replace(/_user-stories|_userstories|-user-stories|-userstories/, '');
    allStories[moduleName] = stories;
  });

  return allStories;
}

// API-Endpunkte

// Alle verfügbaren User Story Module abrufen
app.get('/api/modules', (req, res) => {
  try {
    const modules = loadAllUserStories();
    res.json({
      success: true,
      modules: Object.keys(modules).map(key => ({
        name: key,
        testCount: modules[key].length
      }))
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Neuen Test-Durchgang erstellen
app.post('/api/runs', (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, error: 'Name ist erforderlich' });
    }

    // Prüfe ob es einen aktiven oder kürzlich abgeschlossenen Durchgang gibt
    const recentRun = db.prepare(`
      SELECT * FROM test_runs
      WHERE status = 'active'
         OR (status = 'completed' AND datetime(completed_at, '+14 days') > datetime('now'))
      ORDER BY started_at DESC
      LIMIT 1
    `).get();

    if (recentRun) {
      if (recentRun.status === 'active') {
        return res.status(400).json({
          success: false,
          error: 'Es gibt bereits einen aktiven Test-Durchgang',
          activeRun: recentRun
        });
      } else {
        const daysRemaining = Math.ceil(
          (new Date(recentRun.completed_at).getTime() + 14 * 24 * 60 * 60 * 1000 - Date.now())
          / (24 * 60 * 60 * 1000)
        );
        return res.status(400).json({
          success: false,
          error: `Der letzte Durchgang wurde vor weniger als 2 Wochen abgeschlossen. Bitte warte noch ${daysRemaining} Tag(e).`,
          recentRun: recentRun
        });
      }
    }

    // Lade alle User Stories
    const allStories = loadAllUserStories();
    let totalTests = 0;
    Object.values(allStories).forEach(stories => {
      totalTests += stories.length;
    });

    // Erstelle neuen Durchgang
    const result = db.prepare(`
      INSERT INTO test_runs (name, total_tests)
      VALUES (?, ?)
    `).run(name, totalTests);

    const runId = result.lastInsertRowid;

    // Erstelle Test-Items
    const insertTest = db.prepare(`
      INSERT INTO test_items (run_id, category, test_number, test_name)
      VALUES (?, ?, ?, ?)
    `);

    Object.entries(allStories).forEach(([moduleName, stories]) => {
      stories.forEach(story => {
        insertTest.run(
          runId,
          `${moduleName} - ${story.category}`,
          story.number,
          story.name
        );
      });
    });

    const run = db.prepare('SELECT * FROM test_runs WHERE id = ?').get(runId);

    res.json({
      success: true,
      run: run
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Alle Test-Durchgänge abrufen
app.get('/api/runs', (req, res) => {
  try {
    const runs = db.prepare(`
      SELECT * FROM test_runs
      ORDER BY started_at DESC
    `).all();

    res.json({ success: true, runs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Einzelnen Test-Durchgang abrufen
app.get('/api/runs/:id', (req, res) => {
  try {
    const run = db.prepare('SELECT * FROM test_runs WHERE id = ?').get(req.params.id);

    if (!run) {
      return res.status(404).json({ success: false, error: 'Durchgang nicht gefunden' });
    }

    const items = db.prepare(`
      SELECT * FROM test_items
      WHERE run_id = ?
      ORDER BY id
    `).all(req.params.id);

    // Gruppiere nach Kategorie
    const groupedItems = {};
    items.forEach(item => {
      if (!groupedItems[item.category]) {
        groupedItems[item.category] = [];
      }
      groupedItems[item.category].push(item);
    });

    res.json({
      success: true,
      run,
      items: groupedItems
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Test-Item als erledigt markieren
app.patch('/api/runs/:runId/items/:itemId', (req, res) => {
  try {
    const { completed } = req.body;

    db.prepare(`
      UPDATE test_items
      SET completed = ?,
          completed_at = CASE WHEN ? = 1 THEN CURRENT_TIMESTAMP ELSE NULL END
      WHERE id = ? AND run_id = ?
    `).run(completed ? 1 : 0, completed ? 1 : 0, req.params.itemId, req.params.runId);

    // Aktualisiere completed_tests im Run
    const completedCount = db.prepare(`
      SELECT COUNT(*) as count
      FROM test_items
      WHERE run_id = ? AND completed = 1
    `).get(req.params.runId);

    db.prepare(`
      UPDATE test_runs
      SET completed_tests = ?
      WHERE id = ?
    `).run(completedCount.count, req.params.runId);

    const item = db.prepare('SELECT * FROM test_items WHERE id = ?').get(req.params.itemId);

    res.json({ success: true, item });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Test-Durchgang abschließen
app.post('/api/runs/:id/complete', (req, res) => {
  try {
    db.prepare(`
      UPDATE test_runs
      SET status = 'completed', completed_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(req.params.id);

    const run = db.prepare('SELECT * FROM test_runs WHERE id = ?').get(req.params.id);

    res.json({ success: true, run });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Test-Durchgang reaktivieren
app.post('/api/runs/:id/reopen', (req, res) => {
  try {
    db.prepare(`
      UPDATE test_runs
      SET status = 'active', completed_at = NULL
      WHERE id = ?
    `).run(req.params.id);

    const run = db.prepare('SELECT * FROM test_runs WHERE id = ?').get(req.params.id);

    res.json({ success: true, run });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Test-Durchgang löschen
app.delete('/api/runs/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM test_runs WHERE id = ?').run(req.params.id);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Server starten
app.listen(PORT, () => {
  console.log(`🚀 Release Testing System läuft auf http://localhost:${PORT}`);
  console.log(`📝 Verfügbare User Story Module:`);
  const modules = loadAllUserStories();
  Object.entries(modules).forEach(([name, stories]) => {
    console.log(`   - ${name}: ${stories.length} Tests`);
  });
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close();
  process.exit(0);
});
