document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

async function fetchData() {
    const apiUrl = 'https://forexrateapi.com/forex';
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data) {
    const forexDataDiv = document.getElementById('forexData');

    // Iterate through the data and display relevant information
    for (const currency in data) {
        const rate = data[currency];
        const currencyDiv = document.createElement('div');
        currencyDiv.innerHTML = `<strong>${currency}:</strong> ${rate}`;
        forexDataDiv.appendChild(currencyDiv);
    }
}
