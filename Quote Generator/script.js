const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// let apiQuotes = [];
// // get quotes from api
// async function getQuotes() {
//   const apiUrl = 'https://type.fit/api/quotes';
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     // Catch Error Here
//     console.error('Error fetching quotes:', error);
//   }
// }

//show loading 
function loading (){
  loader.hidden=false;
  quoteContainer.hidden = true;
}

//hide Loading 
function complete() {
  quoteContainer.hidden = false;
  loader.hiddem = true;
}

//show New Quote
function newQuote() {
  loading ();
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote || !quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }

  // Check if Quote field is blank
  if (!quote || !quote.text) {
    quoteText.textContent = 'Unknown Quote';
  } else {
    // Check Quote length to determine styling
    if (quote.text.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
    complete();
  }
}

//Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// script.js

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// Onload
getQuotes();


