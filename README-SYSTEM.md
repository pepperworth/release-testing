# 📋 Release Testing System

Ein webbasiertes System zur Dokumentation von Release-Tests basierend auf User Stories.

## Features

- ✅ **Automatisches Laden** von User Stories aus Markdown-Dateien
- ✅ **Interaktive Checklisten** mit Fortschrittsanzeige
- ✅ **Test-Durchgänge** mit Zeitstempel und Status
- ✅ **2-Wochen-Sperre** nach Abschluss eines Durchgangs
- ✅ **Kategorisierung** der Tests mit ausklappbaren Bereichen
- ✅ **Responsive Design** für Desktop und Mobile
- ✅ **Persistente Speicherung** mit SQLite

## Installation

### Voraussetzungen

- Node.js (Version 14 oder höher)
- npm

### Schritte

1. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

2. **Server starten:**
   ```bash
   npm start
   ```

   Für Entwicklung mit Auto-Reload:
   ```bash
   npm run dev
   ```

3. **Browser öffnen:**
   ```
   http://localhost:3000
   ```

## Verwendung

### User Stories hinzufügen

Das System liest automatisch alle Dateien, die `user-stories` oder `userstories` im Namen enthalten.

**Dateinamen-Beispiele:**
- `rooms_user-stories`
- `authentication_user-stories`
- `courses-userstories`

**Format der User Story Dateien:**

Die Datei muss eine Markdown-Tabelle mit folgendem Format enthalten:

```markdown
| Nr. | Kategorie | Test | Status |
|-----|-----------|------|--------|
| 1 | Raum | Raum erstellen | ☐ |
| 2 | Raum | Bereich erstellen | ☐ |
| 3.1 | Datei | Bild hochladen | ☐ |
```

### Neuen Test-Durchgang erstellen

1. Klicke auf **"Neuer Test-Durchgang"**
2. Gib einen Namen ein (z.B. "Release 2024-11-26")
3. Klicke auf **"Durchgang erstellen"**

Das System lädt automatisch alle verfügbaren User Stories und erstellt eine Checkliste.

### Tests durchführen

1. Öffne einen Test-Durchgang
2. Klappe Kategorien aus/zu durch Klick auf die Überschrift
3. Hake erledigte Tests ab
4. Der Fortschritt wird automatisch gespeichert und angezeigt

### Durchgang abschließen

1. Klicke auf **"Durchgang abschließen"**
2. Der Durchgang wird als "Abgeschlossen" markiert
3. Für 2 Wochen kann kein neuer Durchgang erstellt werden

### Durchgang wiedereröffnen

- Abgeschlossene Durchgänge können jederzeit wiedereröffnet werden
- Klicke auf **"Wiedereröffnen"** im Detail-View

### Durchgang löschen

- Klicke auf **"Löschen"** und bestätige die Aktion
- Achtung: Diese Aktion kann nicht rückgängig gemacht werden!

## Datenbankstruktur

Das System verwendet SQLite mit folgenden Tabellen:

### `test_runs`
- `id`: Eindeutige ID
- `name`: Name des Durchgangs
- `started_at`: Startzeitpunkt
- `completed_at`: Abschlusszeitpunkt
- `status`: 'active' oder 'completed'
- `total_tests`: Gesamtzahl der Tests
- `completed_tests`: Anzahl erledigter Tests

### `test_items`
- `id`: Eindeutige ID
- `run_id`: Verknüpfung zum Durchgang
- `category`: Kategorie des Tests
- `test_number`: Testnummer (z.B. "1", "3.1")
- `test_name`: Name des Tests
- `completed`: Boolean (erledigt/nicht erledigt)
- `completed_at`: Zeitpunkt der Erledigung

## API-Endpunkte

### GET `/api/modules`
Liefert alle verfügbaren User Story Module

### POST `/api/runs`
Erstellt einen neuen Test-Durchgang
```json
{
  "name": "Release 2024-11-26"
}
```

### GET `/api/runs`
Liefert alle Test-Durchgänge

### GET `/api/runs/:id`
Liefert einen spezifischen Test-Durchgang mit allen Items

### PATCH `/api/runs/:runId/items/:itemId`
Markiert ein Test-Item als erledigt/nicht erledigt
```json
{
  "completed": true
}
```

### POST `/api/runs/:id/complete`
Schließt einen Test-Durchgang ab

### POST `/api/runs/:id/reopen`
Öffnet einen abgeschlossenen Durchgang wieder

### DELETE `/api/runs/:id`
Löscht einen Test-Durchgang

## Technologie-Stack

- **Backend:** Node.js, Express
- **Datenbank:** SQLite (better-sqlite3)
- **Frontend:** Vanilla JavaScript, HTML5, CSS3
- **Markdown-Parser:** marked

## Entwicklung

### Projektstruktur

```
release-testing/
├── public/
│   ├── index.html       # Haupt-HTML
│   ├── styles.css       # Styling
│   └── app.js          # Frontend-Logik
├── server.js           # Backend-Server
├── package.json        # Dependencies
├── rooms_user-stories  # User Story Beispiel
└── release-testing.db  # SQLite Datenbank (auto-generiert)
```

### Neue Features hinzufügen

1. Backend-Endpunkte in `server.js` erweitern
2. Frontend-Funktionen in `public/app.js` hinzufügen
3. Styling in `public/styles.css` anpassen

## Lizenz

MIT
