window.onload = function() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const today = new Date().getDay(); // 0=Sunday, 1=Monday, ...
    // Only highlight if today is Monday-Friday
    if (today >= 1 && today <= 5) {
        const colIndex = today; // 1=Monday, 2=Tuesday, ...
        const table = document.getElementById('timetable');
        for (let i = 0; i < table.rows.length; i++) {
            if (table.rows[i].cells.length > colIndex) {
                table.rows[i].cells[colIndex].classList.add('current-day');
            }
        }
    }
};

document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const role = document.querySelector('input[name="role"]:checked');
    if (role) {
        if (role.value === 'teacher') {
            window.location.href = 'teacher.html';
        } else if (role.value === 'student') {
            window.location.href = 'student.html';
        } else if (role.value === 'admin') {
            window.location.href = 'admin.html';
        }
    }
}; 