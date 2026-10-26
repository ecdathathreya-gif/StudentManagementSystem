
function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Enter all details");
        return;
    }

    let student = document.createElement("li");
    student.textContent = "Roll No: " + roll + " - " + name;

    document.getElementById("students").appendChild(student);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
}
