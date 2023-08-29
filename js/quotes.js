const quotes = [
  {
    quote: "Don’t wait. The time will never be just right.",
    author: "Napoleon Hill",
  },
  {
    quote:
      "You can, you should, and if you’re brave enough to start, you will.",
    author: "Stephen King",
  },
  {
    quote:
      "He who does not understand your silence will probably not understand your words.",
    author: "Elbert Hubbard",
  },
  {
    quote:
      "Happiness often sneaks in through a door you didn’t know you left open.",
    author: "John Barrymore",
  },
  {
    quote:
      "Sometimes the questions are complicated, and the answers are simple.",
    author: "Dr. Seuss",
  },
  {
    quote: "We build too many walls and not enough bridges.",
    author: "Isaac Newton",
  },
  {
    quote:
      "The only place where your dream becomes impossible is in your own thinking.",
    author: "Robert H Schuller",
  },
  {
    quote:
      "We can complain because rose bushes have thorns, or rejoice because thorns have roses.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "If you look at what you have in life, you’ll always have more.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "A champion is defined not by their wins but by how they can recover when they fall.",
    author: "Serena Williams",
  },
  {
    quote:
      "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
    author: "Joseph Campbell",
  },
  {
    quote:
      "In the end, everything will be okay. If it’s not okay, it’s not yet the end.",
    author: "Fernando Sabino",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote: "Every saint has a past, and every sinner has a future.",
    author: "Oscar Wilde",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
];

const quote = document.querySelector("#quote span");
const author = document.querySelector("#quote i");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
