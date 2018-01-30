const url = "https://talaikis.com/api/quotes/random/";

var quote = "";

function request() {
  const request = fetch(url)
    .then(response => response.json())
    .then(data => quote += (data.quote));
    var displayQuote = document.querySelector("#newQuote").innerHTML = quote;
};

const generateQuote = document.querySelector("#getQuote");
generateQuote.addEventListener("click", request);
document.querySelector("#getQuote").click();

function newTweet() {
    document.getElementById("tweet").setAttribute("href", "https://twitter.com/intent/tweet?text=" + quote);
    //("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quote);
  };


const generateTweet = document.querySelector("#tweet");
generateTweet.addEventListener("click", newTweet);
