const firstNumValue = document.getElementById("1st-num").value
const secondNumValue = document.getElementById("2nd-num").value
const display = document.getElementById("result-display")

// operator buttons
const multiplyButton = document.getElementById("multiply")
const divideButton = document.getElementById("divide")

multiplyButton.addEventListener('click', function() {
    const firstNumValue = parseFloat(document.getElementById("1st-num").value)
    const secondNumValue = parseFloat(document.getElementById("2nd-num").value)
    let result = firstNumValue * secondNumValue;
    display.innerText = "The result is: " + result;
})

divideButton.addEventListener('click', function() {
    const firstNumValue = parseFloat(document.getElementById("1st-num").value)
    const secondNumValue = parseFloat(document.getElementById("2nd-num").value)
    let result = firstNumValue / secondNumValue;
    display.innerText = "The result is: " + result;
})