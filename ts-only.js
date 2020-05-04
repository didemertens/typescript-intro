var button = document.querySelector("button");
var firstNumber = document.getElementById("num1");
var secondNumber = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+firstNumber.value, +secondNumber.value));
});
