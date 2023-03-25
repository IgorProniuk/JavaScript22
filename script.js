let firstNumber = prompt("Enter first number");
let secondNumber = prompt("Enter second number");

if (firstNumber === "" || secondNumber === "") {
    alert("One or both fields are empty. Please enter two numbers.");
} else if (secondNumber === "0") {
    alert("Error: division by zero");
} else if (Number(firstNumber) < Number(secondNumber)) {
    if (confirm("Are you sure you want to continue?")) {
        let subtraction = Number(firstNumber) - Number(secondNumber);
        let multiplication = Number(firstNumber) * Number(secondNumber);
        let result = "Subtraction: " + subtraction + ", Multiplication: " + multiplication;
        alert(result);
    }
} else {
    let sum = Number(firstNumber) + Number(secondNumber);
    let division = Number(firstNumber) / Number(secondNumber);
    let multiplication = Number(firstNumber) * Number(secondNumber);
    let result = "Sum: " + sum + ", Division: " + division + ", Multiplication: " + multiplication;
    alert(result);
}
