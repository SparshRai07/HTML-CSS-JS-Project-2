const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = dovument.getElementById('loader');

//show-loading 
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true; 
}


//hide loading 
function loading() {
  if (!loader.hidden) {
    quoteContainer.hidden =false;
    loader.hidden = true;
  }
}
//Get Quote from API
// 



// Get Quote from API
async function getQuote() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  const maxAttempts = 5;  // Set a maximum number of retry attempts

  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();

    // if Author is blank, add 'Unknown'
    if (data.quoteAuthor === '') {
      authorText.innerText = 'Unknown';
    } else {
      authorText.innerText = data.quoteAuthor;
    }

    // Reduce font size for long quotes
    if (data.quoteText.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }

    quoteText.innerText = data.quoteText;
    //Stop loader, Show Quote
    complete();

  } catch (error) {
    if (maxAttempts > 0) {
      // Retry the request
      getQuote();
      console.log('Retrying...');
      maxAttempts--;
    } else {
      console.log('Max retry attempts reached. Unable to fetch a quote.', error);
    }
  }
}


function tweetQuote() {
  const quote = quoteText.innerText;
  const authpr = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

//Event Listeners 
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

//on load 
// getQuote();
loading();