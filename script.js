let editIndex = null;

function addTask() {
    const input = document.getElementById('taskInput');
    const value = input.value.trim();
    if (value === '') {
        alert('Write something to add in the list');
        input.focus();
        return;
    }

    if (editIndex !== null) {
        document.querySelectorAll('#taskList li')[editIndex].children[0].textContent = value;
        editIndex = null;
        document.getElementById('addBtn').textContent = "Add";
    } else {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = value;

        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.className = "editBtn";
        editBtn.onclick = function() {
            input.value = span.textContent;
            editIndex = Array.from(li.parentNode.children).indexOf(li);
            document.getElementById('addBtn').textContent = "Update";
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";
        deleteBtn.onclick = function() {
            li.remove();
            input.value = "";
            editIndex = null;
            document.getElementById('addBtn').textContent = "Add";
        };

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        document.getElementById('taskList').appendChild(li);
    }
    input.value = "";
    document.getElementById('addBtn').textContent = "Add";
}