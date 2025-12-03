const submitB = document.getElementById("submit");
const nameI = document.getElementById("task-name");
const infoI = document.getElementById("task-info");
const elements = document.getElementById("table-elements");

let elementBeingEdited = null;

function insertNewElement() {
    let taskName = nameI.value;
    let taskInfo = infoI.value;

    elements.innerHTML += `
    <li class="element">
        <div class="element-name">${taskName}</div>
        <div class="element-info">${taskInfo}</div>
        <div class="element-functions">
            <button class="delete">Delete</button>
            <button class="edit">Edit</button>
        </div>
    </li>`;

    nameI.value = "";
    infoI.value = "";
}

elements.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit")) {
        startEdit(e.target.closest(".element"));
    }
    if (e.target.classList.contains("delete")) {
        e.target.closest(".element").remove();
    }
});

function startEdit(element) {
    nameI.value = element.querySelector(".element-name").textContent;
    infoI.value = element.querySelector(".element-info").textContent;

    elementBeingEdited = element;
    submitB.textContent = "Save";
}

function saveEdit() {
    elementBeingEdited.querySelector(".element-name").textContent = nameI.value;
    elementBeingEdited.querySelector(".element-info").textContent = infoI.value;

    elementBeingEdited = null;
    submitB.textContent = "Submit";
    nameI.value = "";
    infoI.value = "";
}

submitB.addEventListener("click", function () {
    if (elementBeingEdited) {
        saveEdit();
    } else {
        insertNewElement();
    }
});
