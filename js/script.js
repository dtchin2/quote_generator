// file to read from quotes

const quotes = [
  "Never Give Up",
  "Always go for the win",
  "Look on the bright side",
  "He who never tries will not succeed"
]

let quotes_size = quotes.length;



function getRandomQuote(){
  let random_number = Math.floor(Math.random() * quotes_size)
  document.getElementById('quoteText').value = quotes[random_number]
}
