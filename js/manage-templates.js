// =============================================
//      MANAGE TEMPLATES – PURE JS (NO DEPENDENCIES)
// =============================================

const STORAGE_KEY = 'email_templates';

function getTemplates() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
}

function saveTemplates(templates) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
}

function loadTemplates() {
    const container = document.getElementById('templates-container');
    const noTemplates = document.getElementById('no-templates');
    const templates = getTemplates();
    const keys = Object.keys(templates);

    if (keys.length === 0) {
        noTemplates.style.display = 'block';
        container.innerHTML = '';
        return;
    }

    noTemplates.style.display = 'none';
    container.innerHTML = '';

    keys.forEach(name => {
        const tmpl = templates[name];
        const previewText = tmpl.body.replace(/<[^>]*>/g, ' ').substring(0, 180);
        const displayText = previewText + (tmpl.body.length > 180 ? '...' : '');

        const card = document.createElement('div');
        card.className = 'template-card';
        card.innerHTML = `
            <div class="template-card-header">
                <span><i class="fas fa-tag"></i> ${escapeHtml(name)}</span>
            </div>
            <div class="template-card-body">
                <div class="template-subject">${escapeHtml(tmpl.subject || '(No subject)')}</div>
                <div class="template-preview">${escapeHtml(displayText)}</div>
                <div class="template-actions">
                    <button onclick="useTemplate('${name}')" class="btn-use">
                        <i class="fas fa-paper-plane"></i> Use
                    </button>
                    <button onclick="renameTemplate('${name}')" class="btn-edit">
                        <i class="fas fa-edit"></i> Rename
                    </button>
                    <button onclick="deleteTemplate('${name}')" class="btn-delete">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function useTemplate(name) {
    const templates = getTemplates();
    const tmpl = templates[name];
    if (!tmpl) return;

    sessionStorage.setItem('load_template_data', JSON.stringify(tmpl));
    sessionStorage.setItem('load_template_name', name);

    alert(`Template "${name}" loaded! Opening email composer...`);
    window.location.href = 'candidate-details.html'; // Change to your main page
}

function renameTemplate(oldName) {
    const newName = prompt('Enter new template name:', oldName);
    if (!newName || newName.trim() === '' || newName === oldName) return;

    const templates = getTemplates();
    if (templates[newName]) {
        alert('Template name already exists!');
        return;
    }

    templates[newName] = templates[oldName];
    delete templates[oldName];
    saveTemplates(templates);
    loadTemplates();
}

function deleteTemplate(name) {
    if (!confirm(`Delete template "${name}" permanently?`)) return;
    const templates = getTemplates();
    delete templates[name];
    saveTemplates(templates);
    loadTemplates();
}

function clearAllTemplates() {
    if (!confirm('Delete ALL templates? This cannot be undone!')) return;
    localStorage.removeItem(STORAGE_KEY);
    loadTemplates();
}

function goBack() {
    window.history.back();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load on page ready
document.addEventListener('DOMContentLoaded', loadTemplates);