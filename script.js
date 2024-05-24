/* Daily quote generator API

API Reference github :https://github.com/lukePeavey/quotable
API End point: https://api.quotable.io/random - for random quotes */


const quoteTextEle = document.getElementById('quoteEle');
const authorTextEle = document.getElementById('authorEle');
const apiURL = 'https://api.quotable.io/random';



async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  quoteTextEle.innerHTML = data.content;
  authorTextEle.innerHTML = data.author;


}

getQuote(apiURL);