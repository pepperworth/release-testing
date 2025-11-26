// API Base URL
const API_BASE = '/api';

// State
let currentRunId = null;

// DOM Elements
const dashboardView = document.getElementById('dashboard-view');
const runDetailView = document.getElementById('run-detail-view');
const runsGrid = document.getElementById('runs-grid');
const newRunBtn = document.getElementById('new-run-btn');
const backBtn = document.getElementById('back-btn');
const newRunModal = document.getElementById('new-run-modal');
const modalClose = document.getElementById('modal-close');
const modalCancel = document.getElementById('modal-cancel');
const modalCreate = document.getElementById('modal-create');
const runNameInput = document.getElementById('run-name');
const modalError = document.getElementById('modal-error');
const completeRunBtn = document.getElementById('complete-run-btn');
const reopenRunBtn = document.getElementById('reopen-run-btn');
const deleteRunBtn = document.getElementById('delete-run-btn');

// Event Listeners
newRunBtn.addEventListener('click', openNewRunModal);
modalClose.addEventListener('click', closeNewRunModal);
modalCancel.addEventListener('click', closeNewRunModal);
modalCreate.addEventListener('click', createNewRun);
backBtn.addEventListener('click', showDashboard);
completeRunBtn.addEventListener('click', completeRun);
reopenRunBtn.addEventListener('click', reopenRun);
deleteRunBtn.addEventListener('click', deleteRun);

// Initialisierung
loadRuns();

// Funktionen

async function loadRuns() {
    try {
        const response = await fetch(`${API_BASE}/runs`);
        const data = await response.json();

        if (data.success) {
            displayRuns(data.runs);
        }
    } catch (error) {
        console.error('Fehler beim Laden der Durchgänge:', error);
    }
}

function displayRuns(runs) {
    if (runs.length === 0) {
        runsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <h3>Keine Test-Durchgänge vorhanden</h3>
                <p>Erstelle einen neuen Durchgang, um mit dem Testen zu beginnen.</p>
            </div>
        `;
        return;
    }

    runsGrid.innerHTML = runs.map(run => {
        const percentage = run.total_tests > 0
            ? Math.round((run.completed_tests / run.total_tests) * 100)
            : 0;

        const date = new Date(run.started_at).toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        return `
            <div class="run-card" onclick="loadRunDetail(${run.id})">
                <div class="run-card-header">
                    <div>
                        <h3>${run.name}</h3>
                        <div class="run-card-date">${date}</div>
                    </div>
                    <span class="status-badge status-${run.status}">
                        ${run.status === 'active' ? 'Aktiv' : 'Abgeschlossen'}
                    </span>
                </div>
                <div class="run-card-progress">
                    <div class="run-card-progress-text">
                        <span>${run.completed_tests} von ${run.total_tests} Tests</span>
                        <span>${percentage}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percentage}%"></div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function openNewRunModal() {
    newRunModal.classList.add('active');
    runNameInput.value = '';
    modalError.style.display = 'none';
    runNameInput.focus();
}

function closeNewRunModal() {
    newRunModal.classList.remove('active');
}

async function createNewRun() {
    const name = runNameInput.value.trim();

    if (!name) {
        showModalError('Bitte gib einen Namen für den Durchgang ein.');
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/runs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });

        const data = await response.json();

        if (data.success) {
            closeNewRunModal();
            loadRuns();
            loadRunDetail(data.run.id);
        } else {
            showModalError(data.error);
        }
    } catch (error) {
        console.error('Fehler beim Erstellen des Durchgangs:', error);
        showModalError('Ein Fehler ist aufgetreten. Bitte versuche es erneut.');
    }
}

function showModalError(message) {
    modalError.textContent = message;
    modalError.style.display = 'block';
}

async function loadRunDetail(runId) {
    currentRunId = runId;

    try {
        const response = await fetch(`${API_BASE}/runs/${runId}`);
        const data = await response.json();

        if (data.success) {
            displayRunDetail(data.run, data.items);
            showRunDetail();
        }
    } catch (error) {
        console.error('Fehler beim Laden des Durchgangs:', error);
    }
}

function displayRunDetail(run, itemsByCategory) {
    // Header
    document.getElementById('run-title').textContent = run.name;

    const date = new Date(run.started_at).toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    document.getElementById('run-date').textContent = `Gestartet: ${date}`;

    const statusBadge = document.getElementById('run-status-badge');
    statusBadge.className = `status-badge status-${run.status}`;
    statusBadge.textContent = run.status === 'active' ? 'Aktiv' : 'Abgeschlossen';

    // Buttons
    if (run.status === 'active') {
        completeRunBtn.style.display = 'inline-flex';
        reopenRunBtn.style.display = 'none';
    } else {
        completeRunBtn.style.display = 'none';
        reopenRunBtn.style.display = 'inline-flex';
    }

    // Progress
    const percentage = run.total_tests > 0
        ? Math.round((run.completed_tests / run.total_tests) * 100)
        : 0;

    document.getElementById('progress-text').textContent =
        `${run.completed_tests} von ${run.total_tests} Tests abgeschlossen`;
    document.getElementById('progress-percentage').textContent = `${percentage}%`;
    document.getElementById('progress-fill').style.width = `${percentage}%`;

    // Categories and Items
    const categoriesContainer = document.getElementById('test-categories');
    categoriesContainer.innerHTML = '';

    Object.entries(itemsByCategory).forEach(([category, items]) => {
        const completedCount = items.filter(item => item.completed).length;
        const categoryEl = createCategoryElement(category, items, completedCount);
        categoriesContainer.appendChild(categoryEl);
    });
}

function createCategoryElement(category, items, completedCount) {
    const section = document.createElement('div');
    section.className = 'category-section';

    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
        <div>
            <div class="category-title">${category}</div>
            <div class="category-stats">${completedCount} von ${items.length} abgeschlossen</div>
        </div>
        <div class="category-toggle">▼</div>
    `;

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'category-items';

    items.forEach(item => {
        const itemEl = createTestItemElement(item);
        itemsContainer.appendChild(itemEl);
    });

    // Toggle-Funktionalität
    header.addEventListener('click', () => {
        itemsContainer.classList.toggle('collapsed');
        const toggle = header.querySelector('.category-toggle');
        toggle.classList.toggle('collapsed');
    });

    section.appendChild(header);
    section.appendChild(itemsContainer);

    return section;
}

function createTestItemElement(item) {
    const div = document.createElement('div');
    div.className = `test-item ${item.completed ? 'completed' : ''}`;

    const completedDate = item.completed_at
        ? new Date(item.completed_at).toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
        : '';

    div.innerHTML = `
        <div class="checkbox-wrapper">
            <input
                type="checkbox"
                class="checkbox"
                ${item.completed ? 'checked' : ''}
                data-item-id="${item.id}"
            >
        </div>
        <div class="test-content">
            <div>
                <span class="test-number">#${item.test_number}</span>
                <span class="test-name">${item.test_name}</span>
            </div>
            ${item.completed_at ? `<div class="test-completed-date">Abgeschlossen: ${completedDate}</div>` : ''}
        </div>
    `;

    const checkbox = div.querySelector('.checkbox');
    checkbox.addEventListener('change', (e) => {
        toggleTestItem(item.id, e.target.checked);
    });

    return div;
}

async function toggleTestItem(itemId, completed) {
    try {
        const response = await fetch(`${API_BASE}/runs/${currentRunId}/items/${itemId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed })
        });

        const data = await response.json();

        if (data.success) {
            // Reload detail to update progress
            loadRunDetail(currentRunId);
        }
    } catch (error) {
        console.error('Fehler beim Aktualisieren des Test-Items:', error);
    }
}

async function completeRun() {
    if (!confirm('Möchtest du diesen Durchgang wirklich abschließen?')) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/runs/${currentRunId}/complete`, {
            method: 'POST'
        });

        const data = await response.json();

        if (data.success) {
            loadRunDetail(currentRunId);
        }
    } catch (error) {
        console.error('Fehler beim Abschließen des Durchgangs:', error);
    }
}

async function reopenRun() {
    if (!confirm('Möchtest du diesen Durchgang wirklich wiedereröffnen?')) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/runs/${currentRunId}/reopen`, {
            method: 'POST'
        });

        const data = await response.json();

        if (data.success) {
            loadRunDetail(currentRunId);
        }
    } catch (error) {
        console.error('Fehler beim Wiedereröffnen des Durchgangs:', error);
    }
}

async function deleteRun() {
    if (!confirm('Möchtest du diesen Durchgang wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.')) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/runs/${currentRunId}`, {
            method: 'DELETE'
        });

        const data = await response.json();

        if (data.success) {
            showDashboard();
            loadRuns();
        }
    } catch (error) {
        console.error('Fehler beim Löschen des Durchgangs:', error);
    }
}

function showDashboard() {
    dashboardView.style.display = 'block';
    runDetailView.style.display = 'none';
    currentRunId = null;
    loadRuns();
}

function showRunDetail() {
    dashboardView.style.display = 'none';
    runDetailView.style.display = 'block';
}

// Modal schließen bei Klick außerhalb
window.addEventListener('click', (e) => {
    if (e.target === newRunModal) {
        closeNewRunModal();
    }
});

// Enter-Taste im Input
runNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createNewRun();
    }
});
