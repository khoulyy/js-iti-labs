const studentName = document.querySelector("#name");
const studentGrade = document.querySelector("#grade");
const addButton = document.querySelector(".add");
const tableBody = document.querySelector("tbody");
const sortSelect = document.querySelector("#sort");
const filterSelect = document.querySelector("#filter");
const form = document.querySelector("form");

let students = [];

const nameError = document.createElement("div");
nameError.style.color = "red";
studentName.after(nameError);

const gradeError = document.createElement("div");
gradeError.style.color = "red";
studentGrade.after(gradeError);

form.addEventListener("submit", function (e) {
    e.preventDefault();
    nameError.textContent = "";
    gradeError.textContent = "";

    let name = studentName.value.trim();
    let grade = studentGrade.value.trim();
    let isValid = true;

    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    if (!name) {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else if (students.some((s) => s.name === name)) {
        nameError.textContent = "Name must be unique.";
        isValid = false;
    }

    if (!grade) {
        gradeError.textContent = "Grade is required.";
        isValid = false;
    } else if (isNaN(grade) || grade < 0 || grade > 100) {
        gradeError.textContent = "Grade must be a number between 0 and 100.";
        isValid = false;
    } else {
        grade = parseFloat(grade);
    }

    if (isValid) {
        students.push({ name, grade });
        studentName.value = "";
        studentGrade.value = "";
        renderTable();
    }
});

function renderTable() {
    tableBody.innerHTML = "";

    let data = [...students];

    if (filterSelect.value === "pass") {
        data = data.filter((s) => s.grade >= 60);
    } else if (filterSelect.value === "fail") {
        data = data.filter((s) => s.grade < 60);
    }

    if (sortSelect.value === "name") {
        data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortSelect.value === "grade") {
        data.sort((a, b) => a.grade - b.grade);
    }

    data.forEach((student) => {
        const row = document.createElement("tr");

        row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.grade}</td>
      <td><button onclick="deleteStudent('${student.name}')">Delete</button></td>
    `;

        tableBody.appendChild(row);
    });
}

function deleteStudent(name) {
    students = students.filter((s) => s.name !== name);
    renderTable();
}

sortSelect.addEventListener("change", renderTable);
filterSelect.addEventListener("change", renderTable);
