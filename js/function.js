var themeColor = ['red', 'green', 'DarkBlue', 'orange', 'coral', 'DarkSlateGrey', 'DarkTurquoise', 'MediumPurple', 'peru', 'salmon', 'SteelBlue', 'Violet', 'MediumVioletRed', 'LimeGreen', 'black'];
var quotes = [
   ["You have to learn the rules of the game. And then you have to play better than anyone else.", "Albert Einstein"],
   ["In the end, it's not the years in your life that count. It's the life in your years.", "Abraham Lincoln"],
   ["Be yourself, everyone else is already taken.", "Oscar Wilde"],
   ["Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", "Martin Luther King Jr."],
   ["If you don't stand for something you will fall for anything.", "Gordon A. Eadie"],
   ["Genius is one percent inspiration, ninety-nine percent perspiration.", "Thomas Edison"], 
   ["The real problem is not whether machines think but whether men do.", "B.F. Skinner"],
   ["There are only two hard things in Computer Science: cache invalidation and naming things.", "Phil Karlton"],
   ["If today were the last day of your life, would you want to do what you are about to do today?", "Steve Jobs"]
];

function randomColor() {
    var button = document.getElementById('button');
    var xColor = Math.floor(Math.random() * themeColor.length);
    document.body.style.backgroundColor = themeColor[xColor];
    document.body.style.color = themeColor[xColor];
    button.style.backgroundColor = themeColor[xColor];
    
}

function randomQuote() {
    var xQuote = quotes[Math.floor(Math.random() * quotes.length)]
    document.getElementById("quote").innerHTML = xQuote[0];
    document.getElementById("author").innerHTML = xQuote[1];
//    alert(xQuote[1]);
    randomColor();
}

