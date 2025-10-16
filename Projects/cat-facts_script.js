
const catFact = document.getElementById('fact-display'); 
const catButton = document.getElementById('new-fact-button');

const fetchCatFact = async () => {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        catFact.innerText = data.fact
    } catch (error) {
        catFact.innerText = 'Failed to fetch cat fact. Please try again later.';
        console.error('Error fetching cat fact:', error);
    }
};

catButton.addEventListener('click', fetchCatFact);
