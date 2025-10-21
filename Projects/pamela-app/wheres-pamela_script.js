const wheresPamelaForm = document.querySelector('#pamela-form');

wheresPamelaForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedOption = document.querySelector('input[name="pamela-location"]:checked');
    const answerDisplay = document.getElementById('answer-display');

    if (!selectedOption) {
        answerDisplay.innerText = 'Please select an option!';
        return;
    }

    const userChoice = selectedOption.value;

    if (userChoice === 'Online Shopping') {
        answerDisplay.innerText = 'Nope, not there.';
    } else if (userChoice === 'Tiktok scrolling') {
        answerDisplay.innerText = 'Nah, not right now. Good guess though!';
    } else if (userChoice === 'Sleeping') {
        answerDisplay.innerText = 'Probably not';
    } else if (userChoice === 'Watching Winx') {
        answerDisplay.innerText = 'You found Pamela! She is watching Winx!';
    } else {
        answerDisplay.innerText = 'That is not where Pamela is. Try again!';
    }
});

wheresPamelaForm.addEventListener('reset', () => {
    const answerDisplay = document.getElementById('answer-display');
    answerDisplay.innerText = 'Your answer will appear here!';
});

// Note: The above code handles the submission and reset of the "Where is Pamela?" form.

// When the form is submitted, it checks which radio button is selected and displays an alert with the selected value. It also updates a designated area on the page to show the user's guess. If no option is selected, it prompts the user to make a selection. On reset, it clears the displayed answer.



