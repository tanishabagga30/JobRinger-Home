const searches = [
  { title: "chef", sub: "Search - 33", shared: "--", date: "24-May-2024" },
  { title: "HR Executive", sub: "Search - 28", shared: "--", date: "23-May-2024" },
  { title: "Search - 27", sub: "Search - 27", shared: "--", date: "23-May-2024" },
  { title: "Search - 14", sub: "Search - 14", shared: "--", date: "03-May-2024" }
];

function render() {
  const tbody = document.querySelector('#savedTable tbody');
  tbody.innerHTML = searches.map((s, i) => `
    <tr>
      <td><input type="checkbox" class="row-check" data-index="${i}"></td>
      <td>
        <div class="title-main">${s.title}</div>
        <div class="title-sub">${s.sub}</div>
      </td>
      <td>${s.shared}</td>
      <td>${s.date}</td>
      <td>
        <div class="row-actions">
          <button class="btn-modify" onclick="modify(${i})">Modify</button>
          <button class="btn-search" onclick="runSearch(${i})">Search</button>
        </div>
      </td>
    </tr>
  `).join('');
  document.getElementById('count').textContent = searches.length;
}

// Select All
document.getElementById('selectAll').onclick = () => {
  const checked = document.getElementById('selectAll').checked;
  document.querySelectorAll('.row-check').forEach(cb => cb.checked = checked);
};

// Delete Selected
document.getElementById('deleteBtn').onclick = () => {
  const selected = [...document.querySelectorAll('.row-check:checked')];
  if (!selected.length) return alert("Select at least one");
  if (confirm(`Delete ${selected.length} search(es)?`)) {
    selected.reverse().forEach(cb => searches.splice(cb.dataset.index, 1));
    render();
  }
};

// Button Actions
function modify(i) {
  alert(`Modify: ${searches[i].title}`);
}
function runSearch(i) {
  alert(`Running search: ${searches[i].title}`);
}

render();