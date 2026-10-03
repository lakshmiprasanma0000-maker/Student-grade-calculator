// Get the button and result area
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

// Run this code when the button is clicked
calculateBtn.addEventListener("click", function () {

    // Read marks from all five input fields
    const math = Number(document.getElementById("math").value);
    const computer = Number(document.getElementById("computer").value);
    const english = Number(document.getElementById("english").value);
    const physics = Number(document.getElementById("physics").value);
    const chemistry = Number(document.getElementById("chemistry").value);

    // Store all marks in an array
    const marks = [math, computer, english, physics, chemistry];

    // Check whether marks are valid
    for (let mark of marks) {
        if (mark < 0 || mark > 100 || !Number.isInteger(mark)) {
            result.innerHTML = "Please enter whole marks between 0 and 100.";
            return;
        }
    }

    // Calculate total and percentage
    const total = math + computer + english + physics + chemistry;
    const percentage = total / 5;

    // Check pass or fail
    const passed = marks.every(mark => mark >= 35);

    // Assign grade
    let grade;

    if (!passed) {
        grade = "F";
    } else if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Display result
    result.innerHTML = `
        <h2>Your Result</h2>
        <p>Total Marks: ${total} / 500</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
        <p>Status: ${passed ? "PASS" : "FAIL"}</p>
    `;
});