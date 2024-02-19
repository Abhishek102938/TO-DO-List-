const inputbox = document.getElementById("inputbox");
const tab = document.getElementById("tab");
const addbutton = document.getElementById("addition");
const updatebutton = document.getElementById("update"); 
updatebutton.style.display = "none";
function addtask() {
    if (inputbox.value === "") {
        alert("You must write anything!");
    } else {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = inputbox.value;
        td.textContent = "• " + inputbox.value;

        const Editbutton = document.createElement("button");
        Editbutton.innerHTML = "Edit";
        Editbutton.id = "editbutton";

        const Deletebutton = document.createElement("button");
        Deletebutton.innerHTML = "Delete";
        Deletebutton.id = "deletebutton";

        tab.appendChild(tr);
        tr.appendChild(td);
        tr.appendChild(Editbutton);
        tr.appendChild(Deletebutton);
    }
    inputbox.value = "";
}

tab.addEventListener("click", function (e) {
    if (e.target && e.target.id === "deletebutton") {
        e.target.parentElement.remove();
    } else if (e.target && e.target.id === "editbutton") {
        currentTd = e.target.parentElement.children[0];
        const currenttext = currentTd.textContent;
        inputbox.value = currenttext;
        inputbox.focus();
        addbutton.style.display = "none";
        updatebutton.style.display = "inline";
    }
});
function updatetask() {
    if (currentTd !== null) {
        currentTd.textContent = inputbox.value;
        addbutton.style.display = "inline";
        updatebutton.style.display = "none";
    }
    inputbox.value=" ";
}
