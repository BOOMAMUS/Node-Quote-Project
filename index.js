const axios = require('axios');
// https://zenquotes.io/api/random/quotes{1}
function getQuote() {
    axios.get(`https://zenquotes.io/api/random`)
        .then(response => {
            response.data.forEach((quote) => {
                // console.log("Here's a motivational quote for you: ", response.data);
                console.log(`Here's a motivational quote for you: ${quote.q}" Author: ${quote.a}\n`); // Formatting for displaying API retrieved quotes
                // console.log(response.data.map(quote => `${quote.q} Author: ${quote.a}`)
            });
        })
        .catch(error => {
            console.log("Could not fetch a quote. Try again later.");
            const backup = backups[Math.floor(Math.random() * backups.length)];
            console.log(backup);
        });
}
getQuote();

// Backup local quotes for when API catches at the catch error. Displays a random quote in case it hits the catch response using Math.random().
const backups = ['Because of your smile, you make life more beautiful. Author: Thich Nhat Hanh',
'Well done is better than well said. Author: Benjamin Franklin',
'Scared people want comfort and certainty so they avoid failure. People living fully seek challenges because this is where they feel alive. Author: Maxime Lagace',
'We suffer more often in imagination than in reality.   Author: Seneca',
'There is no such thing as a great talent without great willpower. Author: Honore de Balzac',
'For things to change, you have to change. Author: Jim Rohn',
'Do your duty and a little more and the future will take care of itself. Author: Andrew Carnegie',
'A good stance and posture reflect a proper state of mind. Author: Morihei Ueshiba',
'The only limits in your life are those that you set yourself. Author: Celestine Chua',
'Most of us will do anything to avoid facing ourselves. Author: Lolly Daskal',
'The best time to plant a tree was 20 years ago. The second best time is now. Author: Zen Proverb',
'Start the day with love, spend the day with love, fill the day with love and end the day with love. Author: Sathya Sai Baba',
"The tragedy of life doesn't lie in not reaching your goal. The tragedy lies in having no goals to reach. Author: Benjamin Mays",
"You may be disappointed if you fail, but you are doomed if you don't try. Author: Beverly Sills",
"You can do two things at once, but you can't focus effectively on two things at once. Author: Gary Keller",
'Luck is a matter of preparation meeting opportunity. Author: Oprah Winfrey',
'The real art in learning takes place as we move beyond proficiency, when our work becomes an expression of our essence. Author: Josh Waitzkin',
"Don't let making a living prevent you from making a life. Author: John Wooden",
'You are your best thing. Author: Toni Morrison'];