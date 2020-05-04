const button = document.querySelector("button")
const firstNumber = document.getElementById("num1")! as HTMLInputElement
const secondNumber = document.getElementById("num2")! as HTMLInputElement

function add(num1: number, num2: number) {
  return num1 + num2
}

button.addEventListener("click", () => {
  console.log(add(+firstNumber.value, +secondNumber.value))
})