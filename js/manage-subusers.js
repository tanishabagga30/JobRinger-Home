const userData = [
    { id: 1, name: "Trupti Gaikwad", job: true, candidate: true, search: true, subscription: false },
    { id: 2, name: "Yogeeta Rawal", job: true, candidate: false, search: true, subscription: false },
    { id: 3, name: "Anshika Gupta", job: true, candidate: true, search: true, subscription: true },
    { id: 4, name: "Mansi Agrawal", job: false, candidate: true, search: true, subscription: false },
    { id: 5, name: "Neha habade", job: true, candidate: false, search: false, subscription: false },
    { id: 6, name: "Akash Medhi", job: true, candidate: true, search: true, subscription: false },
    { id: 7, name: "Sushmitha Dhatrika", job: true, candidate: true, search: false, subscription: false },
    { id: 8, name: "Aditya Suvarna", job: true, candidate: true, search: true, subscription: false },
    { id: 9, name: "Abhishek Patel", job: false, candidate: true, search: true, subscription: true },
    { id: 10, name: "Anshu Hansda", job: true, candidate: false, search: false, subscription: false },
    { id: 11, name: "Rutuja Jadhav", job: true, candidate: true, search: true, subscription: false },
    { id: 12, name: "Diksha Rathore", job: true, candidate: true, search: false, subscription: true },
    { id: 13, name: "Shweta Gupta", job: true, candidate: true, search: true, subscription: false },
    { id: 14, name: "Ankana ghosh", job: false, candidate: true, search: false, subscription: false },
    { id: 15, name: "Bhavika lallwani", job: true, candidate: true, search: true, subscription: true },
    { id: 16, name: "Pratiksha Murudkar", job: true, candidate: false, search: true, subscription: false },
    { id: 17, name: "Shilpa Aurangabadkar", job: false, candidate: true, search: true, subscription: false },
    { id: 18, name: "Unnati jain", job: true, candidate: true, search: true, subscription: true },
    { id: 19, name: "Shreya Pandey", job: true, candidate: false, search: false, subscription: false },
    { id: 20, name: "Digital Marketing", job: false, candidate: true, search: true, subscription: false },
    { id: 21, name: "Simpi Borah", job: true, candidate: true, search: true, subscription: false },
    { id: 22, name: "Isha Chauhan", job: true, candidate: true, search: true, subscription: true },
    { id: 23, name: "Sibani Karmakar", job: true, candidate: false, search: false, subscription: false },
    { id: 24, name: "Umang Upadhyay", job: false, candidate: true, search: true, subscription: false },
    { id: 25, name: "Ansh Rai", job: true, candidate: true, search: true, subscription: false },
    { id: 26, name: "test user", job: true, candidate: false, search: false, subscription: false },
];

let currentPage = 1;
let pageSize = 10;
let filteredUsers = [...userData]; // Use a copy of the main data
let selectedUserIds = new Set(); // Use a Set to track selected IDs efficiently

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addSubUserModal').style.display = 'none';
    
    renderUsers();
    updateDeleteButtonState();
    
    document.getElementById('show-per-page-select').addEventListener('change', (e) => {
        changePageSize(e.target.value);
    });
    document.getElementById('user-search').addEventListener('keyup', (e) => {
        filterUsers(e.target.value);
    });
});

function getPermissionIcon(hasPermission) {
    const iconClass = hasPermission ? 'fa-check perm-icon check' : 'fa-times perm-icon cross';
    return `<i class="fas ${iconClass}"></i>`;
}

function renderUsers() {
    const container = document.getElementById('user-rows-container');
    container.innerHTML = '';
    
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const usersToRender = filteredUsers.slice(start, end);

    usersToRender.forEach(user => {
        const row = document.createElement('div');
        row.className = 'user-row';
        
        const isSelected = selectedUserIds.has(user.id);

        row.innerHTML = `
            <div class="user-cell">
                <input type="checkbox" data-user-id="${user.id}" onchange="toggleUserSelection(${user.id}, this.checked)"
                    class="form-checkbox h-4 w-4 text-primary_blue cursor-pointer" ${isSelected ? 'checked' : ''}>
            </div>
            <div class="user-name">${user.name}</div>
            <div class="user-cell">${getPermissionIcon(user.job)}</div>
            <div class="user-cell">${getPermissionIcon(user.candidate)}</div>
            <div class="user-cell">${getPermissionIcon(user.search)}</div>
            <div class="user-cell">${getPermissionIcon(user.subscription)}</div>
            <div class="user-cell relative">
                <button class="action-dropdown-btn" onclick="toggleActionDropdown(this)">
                    Action <i class="fas fa-caret-down ml-1"></i>
                </button>
            </div>
        `;
        container.appendChild(row);
    });
    
    updateSelectAllCheckbox();
    renderPagination();
}

function renderPagination() {
    // ... (Pagination logic is the same) ...
    const totalUsers = filteredUsers.length;
    const totalPages = Math.ceil(totalUsers / pageSize);
    const paginationButtons = document.getElementById('pagination-buttons');
    const paginationInfo = document.getElementById('pagination-info');
    
    paginationButtons.innerHTML = '';

    const start = Math.min((currentPage - 1) * pageSize + 1, totalUsers);
    const end = Math.min(currentPage * pageSize, totalUsers);
    
    paginationInfo.textContent = `Showing ${start} to ${end} of ${totalUsers}`;

    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '&laquo;';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => changePage(currentPage - 1);
    paginationButtons.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        if (i === currentPage) {
            pageBtn.className = 'active';
        }
        pageBtn.onclick = () => changePage(i);
        paginationButtons.appendChild(pageBtn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '&raquo;';
    nextBtn.disabled = currentPage === totalPages || totalUsers === 0;
    nextBtn.onclick = () => changePage(currentPage + 1);
    paginationButtons.appendChild(nextBtn);
}

function changePage(newPage) {
    const totalPages = Math.ceil(filteredUsers.length / pageSize);
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderUsers();
    }
}

function changePageSize(size) {
    pageSize = parseInt(size);
    currentPage = 1;
    renderUsers();
}

function filterUsers(searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredUsers = userData.filter(user => 
        user.name.toLowerCase().includes(term)
    );
    currentPage = 1;
    renderUsers();
}

// 🌟 NEW SELECTION FUNCTIONS 🌟

function updateDeleteButtonState() {
    const deleteButton = document.getElementById('delete-selected-btn');
    deleteButton.disabled = selectedUserIds.size === 0;
}

function toggleUserSelection(userId, isChecked) {
    if (isChecked) {
        selectedUserIds.add(userId);
    } else {
        selectedUserIds.delete(userId);
    }
    updateSelectAllCheckbox();
    updateDeleteButtonState();
}

function toggleSelectAll(isChecked) {
    const currentDisplayedIds = Array.from(document.querySelectorAll('#user-rows-container input[type="checkbox"]'))
        .map(checkbox => parseInt(checkbox.dataset.userId));
    
    currentDisplayedIds.forEach(id => {
        if (isChecked) {
            selectedUserIds.add(id);
        } else {
            selectedUserIds.delete(id);
        }
    });

    // Rerender to update checkboxes on screen, or just update the DOM directly
    document.querySelectorAll('#user-rows-container input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = isChecked;
    });

    updateDeleteButtonState();
}

function updateSelectAllCheckbox() {
    const displayedCheckboxes = document.querySelectorAll('#user-rows-container input[type="checkbox"]');
    const selectAllCheckbox = document.getElementById('select-all-checkbox');
    
    if (displayedCheckboxes.length === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
        return;
    }
    
    const allChecked = Array.from(displayedCheckboxes).every(cb => cb.checked);
    const anyChecked = Array.from(displayedCheckboxes).some(cb => cb.checked);
    
    selectAllCheckbox.checked = allChecked;
    // Set indeterminate state if some are checked but not all
    selectAllCheckbox.indeterminate = anyChecked && !allChecked;
}

function deleteSelectedUsers() {
    if (selectedUserIds.size === 0) {
        alert("Please select at least one user to delete.");
        return;
    }

    if (!confirm(`Are you sure you want to permanently delete ${selectedUserIds.size} user(s)?`)) {
        return;
    }

    // Filter out the selected users from the main data array
    // NOTE: In a real application, you would make an AJAX call here to delete from the server.
    
    let deletedCount = 0;
    for (let i = userData.length - 1; i >= 0; i--) {
        if (selectedUserIds.has(userData[i].id)) {
            userData.splice(i, 1);
            deletedCount++;
        }
    }
    
    // Reset filters and selection
    selectedUserIds.clear();
    filteredUsers = [...userData];
    currentPage = 1; 

    alert(`${deletedCount} user(s) successfully deleted.`);
    
    renderUsers();
    updateDeleteButtonState();
}


function openAddSubUserModal() {
    document.getElementById('addSubUserModal').style.display = 'flex';
}

function closeAddSubUserModal() {
    document.getElementById('addSubUserModal').style.display = 'none';
}

function toggleActionDropdown(button) {
    // ... (Action dropdown logic is the same) ...
    document.querySelectorAll('.action-menu').forEach(m => {
        if (m !== button.nextElementSibling) m.classList.add('hidden');
    });
    
    let menu = button.nextElementSibling;
    
    if (!menu || !menu.classList.contains('action-menu')) {
        if(button.parentNode.querySelector('.action-menu')) {
            button.parentNode.querySelector('.action-menu').remove();
        }

        menu = document.createElement('div');
        menu.className = 'action-menu absolute right-0 top-full mt-2 w-48 bg-white dark:bg-dark_background_secondary rounded-md shadow-lg z-10 hidden border border-gray-200 dark:border-dark_border';
        menu.innerHTML = `
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-dark_gray_text hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md">Edit Permissions</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-dark_gray_text hover:bg-gray-100 dark:hover:bg-gray-700">Reset Password</a>
            <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900 rounded-b-md">Deactivate User</a>
        `;
        button.parentNode.classList.add('relative');
        button.parentNode.appendChild(menu);
    }
    
    menu.classList.toggle('hidden');
}

// Global click handler to close action menus
document.addEventListener('click', function(event) {
    document.querySelectorAll('.action-menu').forEach(menu => {
        let button = menu.previousElementSibling;
        if (button && !menu.contains(event.target) && !button.contains(event.target)) {
            menu.classList.add('hidden');
        }
    });
});