document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById("shit-inside");
  const buttons = document.querySelectorAll(".input-button");

  for (let button of buttons) {
    button.addEventListener("click", () => {
      const value = button.dataset.value;

      if (value === "C") {
        display.textContent = "";
      } else if (value === "Del") {
        display.textContent = display.textContent.slice(0, -1);
      } else if (value === "=") {
        try {
          const result = eval(display.textContent);
          display.textContent = Number(result.toPrecision(12));
        } catch {
          display.textContent = "Error";
        }
      } else {
        display.textContent += value;
      }
    });
  }
});