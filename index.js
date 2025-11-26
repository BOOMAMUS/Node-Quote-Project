const axios = require('axios');

function getQuote() {
    axios.get(`https://zenquotes.io/api/random`)
        .then(response => {
            console.log("Here's a motivational quote for you: ", response.data);
        })
        .catch(error => {
            console.log("Could not fetch a quote. Try again later.");
        });
}
getQuote();