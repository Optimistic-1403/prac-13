let students = [];

// Function to display students in the table
function displayStudents() {
    const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    studentTable.innerHTML = ''; // Clear existing rows

    students.forEach((student, index) => {
        const row = studentTable.insertRow();
        row.insertCell(0).textContent = student.name;
        row.insertCell(1).textContent = student.age;
        row.insertCell(2).textContent = student.grade;

        const actionsCell = row.insertCell(3);
        actionsCell.innerHTML = `<button onclick="editStudent(${index})">Edit</button> 
                                 <button onclick="deleteStudent(${index})">Delete</button>`;
    });
}

// Function to add a student
function addStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    if (name && age && grade) {
        students.push({ name, age, grade });
        displayStudents();
        clearInputs();
    } else {
        alert('Please fill in all fields');
    }
}

// Function to edit a student
function editStudent(index) {
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('grade').value = student.grade;

    // Remove student from array (will be re-added later)
    students.splice(index, 1);
    displayStudents();
}

// Function to delete a student
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

// Function to clear input fields
function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('grade').value = '';
}
