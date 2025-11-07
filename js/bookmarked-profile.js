// script.js
const data = [
    // NEW CARD — Aman Sharma (first in list)
    {
        id: 7,
        initials: "AS",
        name: "Aman Sharma",
        title: "Working Professional",
        applied: "Assistant / Junior Advocates | Legal Firm | Mumbai",
        modified: "12-Sep-25",
        exp: "1.6 Years",
        salary: "360000 PA",
        loc: "Gwalior",
        np: "Immediate",
        prev: "Previously worked as a Legal Assistant at XYZ Firm.",
        edu: "LLB",
        fa: "Legal",
        industry: "Legal Services",
        last: "12-Sep-25"
    },
    // Keep your existing 6 cards
    {id:1, initials:"CD", name:"Chirag Dalvi", loc:"Raigad", np:"15 Days", last:"04-Nov-25"},
    {id:2, initials:"MP", name:"Manav Patil", loc:"Mumbai", np:"15 Days", last:"05-Apr-24"},
    {id:3, initials:"SB", name:"Sandhya Baganali", loc:"Mumbai", np:"Immediate", last:"15-Jul-24"},
    {id:4, initials:"SG", name:"Sayali Gadhe", loc:"Mumbai", np:"Immediate", last:"22-Jul-24"},
    {id:5, initials:"PT", name:"Piyush Thakkar", loc:"Mumbai", np:"15 Days", last:"24-Jul-24"},
    {id:6, initials:"PK", name:"Priyanka Kamble", loc:"Mumbai", np:"Immediate", last:"02-Aug-24"}
];

function render() {
    document.getElementById('list').innerHTML = data.map(p => `
        <div class="candidate-card">
            <div class="candidate-info">
                <div class="flex justify-between mb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center font-bold text-sm">${p.initials}</div>
                        <div>
                            <h3 class="font-semibold">${p.name}</h3>
                            <p class="text-xs text-gray-600">${p.title || 'Fresher'}</p>
                            ${p.applied ? `<p class="text-xs font-medium text-blue-700 mt-1">${p.applied}</p>` : ''}
                        </div>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                        <div>Modified: ${p.modified || p.last}</div>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-4 text-xs mb-3 text-gray-600">
                    <div>Rupee ${p.salary || '0/-'}</div>
                    <div>Location ${p.loc}</div>
                    <div>Notice ${p.np}</div>
                </div>

                <div class="text-xs text-gray-600 space-y-1">
                    ${p.prev ? `<div>${p.prev}</div>` : ''}
                    <div>Education: ${p.edu || '—'}</div>
                    <div>Functional Area: ${p.fa || '—'}</div>
                    <div>Industry: ${p.industry || '—'}</div>
                </div>

                <div class="mt-4 p-3 bg-gray-50 rounded border text-xs">
                    <div class="font-medium mb-2">Quick Info</div>
                    <div class="flex gap-2 flex-wrap">
                        <span class="relevance-badge match">Resume</span>
                        <span class="relevance-badge match">${p.exp || 'Fresher'}</span>
                        <span class="relevance-badge ${p.loc.includes('Mumbai')?'match':'no-match'}">Mumbai</span>
                    </div>
                </div>

                <div class="flex justify-between items-center mt-4 pt-3 border-t">
                    <div class="flex gap-2">
                        <button class="px-3 py-1 text-xs border border-green-500 text-green-500 rounded">Shortlist</button>
                        <button class="px-3 py-1 text-xs border border-yellow-500 text-yellow-500 rounded">On Hold</button>
                    </div>
                    <div class="action-btn">
                        <button>Actions Down</button>
                        <div class="dropdown">
                            <a href="#">View Resume</a>
                            <a href="#">Schedule Call</a>
                            <a href="#" class="text-red-600">Remove Bookmark</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact-vertical-bar">
                <div class="bookmark-icon"><i class="fas fa-bookmark"></i></div>
                <a href="mailto:"><i class="fas fa-envelope"></i><span>Email</span></a>
                <a href="tel:"><i class="fas fa-phone"></i><span>Call</span></a>
                <a href="https://wa.me/91" target="_blank"><i class="fab fa-whatsapp"></i><span>WhatsApp</span></a>
            </div>
        </div>
    `).join('');
}

// Keep existing event listeners
document.addEventListener('click', e => {
    const btn = e.target.closest('.action-btn > button');
    if (btn) {
        const menu = btn.nextElementSibling;
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));
        menu.classList.toggle('show');
    } else {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));
    }
});

document.querySelector('.sidebar-toggle')?.addEventListener('click', () => {
    document.querySelector('.filter-sidebar').classList.toggle('active');
});

render();