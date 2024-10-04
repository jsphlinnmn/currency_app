document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('currency-form');
    const key = "b68146315fe2c586d302e060";


    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const amount = document.getElementById('entered-amount').value;
        const fromCurrency = document.getElementById('from').value;
        const toCurrency = document.getElementById('to').value;
        const responseArea = document.getElementById('response-area');

        const url = `https://v6.exchangerate-api.com/v6/${key}/pair/${fromCurrency}/${toCurrency}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                responseArea.innerHTML = `${amount} ${fromCurrency} is equal to ${(amount * data.conversion_rate).toFixed(2)} ${toCurrency}`;
            })
            .catch(error => {
                console.error("Error:", error);
                responseArea.innerHTML = "An error occurred. Please try again later.";
            });
    });
});