
document.addEventListener('DOMContentLoaded', () => {   
       
        // number buttons
        const oneButton = document.getElementById('one');
        const twoButton = document.getElementById('two');
        const threeButton = document.getElementById('three');
        const fourButton = document.getElementById('four');
        const fiveButton = document.getElementById('five');
        const sixButton = document.getElementById('six'); 
        const sevenButton = document.getElementById('seven');
        const eightButton = document.getElementById('eight');
        const nineButton = document.getElementById('nine');
        const zeroButton = document.getElementById('zero');

        // operation buttons
        const plusButton = document.getElementById('plus');
        const minusButton = document.getElementById('minus');
        const divideButton = document.getElementById('divide');
        const timesButton = document.getElementById('times');
        const sqrtbutton = document.getElementById('sqrt');
        

        // function buttons
        const virguleButton = document.getElementById('virgule');
        const parenButton = document.getElementById('parentheses');
        const goneButton = document.getElementById('gone');
        const equalsButton = document.getElementById('equals');
        const deleteButton = document.getElementById('delete');

        const display = document.getElementById("shit-inside");

        oneButton.addEventListener("click", function () {
            display.textContent += "1"
        });   
        twoButton.addEventListener("click", function () {
            display.textContent += "2"
        });   
        threeButton.addEventListener("click", function () {
            display.textContent += "3"
        });   
        fourButton.addEventListener("click", function () {
            display.textContent += "4"
        });   
        fiveButton.addEventListener("click", function () {
            display.textContent += "5"
        });   
        sixButton.addEventListener("click", function () {
            display.textContent += "6"
        });   
        sevenButton.addEventListener("click", function () {
            display.textContent += "7"
        });
        eightButton.addEventListener("click", function () {
            display.textContent += "8"
        });   
        nineButton.addEventListener("click", function () {
            display.textContent += "9"
        }); 
        zeroButton.addEventListener("click", function () {
            display.textContent += "0"
        }); 
        plusButton.addEventListener("click", function () {
            display.textContent += "+"
        });
        minusButton.addEventListener("click", function () {
            display.textContent += "-"
        });    
        divideButton.addEventListener("click", function () {
            display.textContent += "/"
        }); 
        timesButton.addEventListener("click", function () {
            display.textContent += "*"
        });
        sqrtbutton.addEventListener("click", function () {
            display.textContent += "Math.sqrt("
        });
        virguleButton.addEventListener("click", function () {
            display.textContent += "."
        });
        parenButton.addEventListener("click", function () {
            display.textContent += ")"
        })
        goneButton.addEventListener("click", function () {
            display.textContent = ""
        });
        deleteButton.addEventListener("click", function () {
            display.textContent = display.textContent.slice(0, -1);
        });
        equalsButton.addEventListener("click", () => {
        try {
            let result = eval(display.textContent);
        // Use eval carefully — it directly evaluates the string
            display.textContent = Number(result.toPrecision(12));
        } catch (e) {
            display.textContent = "Error";
        }
        });
    });     