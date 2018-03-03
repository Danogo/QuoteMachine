/*-------quote array-----------*/

var quotes = [
  /*Albert Einstein*/
  '\"Imagination is more important than knowledge.\"',' - Albert Einstein',
  '\"I have no special talent. I am only passionately curious.\"',' - Albert Einstein',
  '\"If you can\'t explain it simply, you don\'t understand it well enough.\"',' - Albert Einstein',
  '\"Try not to become a man of success, but rather try to become a man of value.\"',' - Albert Einstein',
  /*Mark Twain*/
  '\"The secret of getting ahead is getting started.\"',' - Mark Twain',
  /*Eleanor Roosevelt*/
  '\"Great minds discuss ideas; average minds discuss events; small minds discuss people.\"',' - Eleanor Roosevelt',
  /*Winston Churchill*/
  '\"Success is not final, failure is not fatal: it is the courage to continue that counts.\"',' - Winston Churchill',
  /*Christopher Hitchens*/
  '\"Owners of dogs will have noticed that, if you provide them with food and water and shelter and affection, they will think you are god. Whereas owners of cats are compelled to realize that, if you provide them with food and water and shelter and affection, they draw the conclusion that they are gods.\"',' - Christopher Hitchens',
  '\"That which can be asserted without evidence, can be dismissed without evidence.\"',' - Christopher Hitchens',
  /*Robert Maynard Pirsig*/
  '\"When one person suffers from a delusion, it is called insanity. When many people suffer from a delusion it is called a Religion.\"',' - Robert M. Pirsig',
  /*Carl Sagan*/
  '\"The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.\"',' - Carl Sagan',
  /*Richard Dawkins*/
  '\"We are all atheists about most of the gods that humanity has ever believed in. Some of us just go one god further.\"',' - Richard Dawkins',
  '\"I am against religion because it teaches us to be satisfied with not understanding the world.\"',' - Richard Dawkins',
  /*Steven Weinberg*/
  '\"With or without religion, good people can behave well and bad people can do evil; but for good people to do evil - that takes religion.\"',' - Steven Weinberg',
  /*Ricky Gervais*/
  '\"I think religion\'s greatest trick wasn\'t convincing some people that there was a God, he was all powerful... It was convincing everyone else that you couldn\'t ridicule the idea.\"',' - Ricky Gervais',
  '\"Just because you\'re offended, doesn\'t mean you\'re right.\"',' - Ricky Gervais',
  /*Bertrand Russel*/
  '\"I would never die for my beliefs because I might be wrong.\"',' - Bertrand Russell',
  /*Douglas Adams*/
  '\"Isn\'t it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?\"',' - Douglas Adams',
  /*George Orwell*/
  '\"In a time of universal deceit — telling the truth is a revolutionary act.\"','- George Orwell',
  /*Richard Feynman*/
  '\"The first principle is that you must not fool yourself — and you are the easiest person to fool.\"', ' - Richard Feynman'
];


/*------quote function---------*/
var last = 0;
var allQuotes = quotes.length;
var btnEl = document.querySelector('.btn-quote');
btnEl.addEventListener('click', function() {            //click event
  var randNr = Math.floor(Math.random() * (allQuotes)); //random number for quote table
  while (randNr === last || randNr %2 !== 0) {          //if number is equal to previous one or odd
    randNr = Math.floor(Math.random() * (allQuotes));   //pick another number
  }
  last = randNr;
  var tweetQuote = "https://twitter.com/intent/tweet?text=" + quotes[last] + quotes[last+1];
  document.getElementById("link-tweet").setAttribute('href', tweetQuote);
  document.getElementsByClassName("quote-text")[0].innerHTML = quotes[randNr];
  document.getElementsByClassName("quote-author")[0].innerHTML = quotes[randNr+1];
}, false);
