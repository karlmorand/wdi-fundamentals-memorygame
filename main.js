var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


var gameBoard = document.getElementById('game-board');



var createBoard = function (){
	for (i = 0; i < cards.length; i++){
	var newCard = document.createElement('div');
	newCard.className = 'card';
	newCard.setAttribute('data-card', cards[i]);
	newCard.addEventListener('click', isTwoCards);

	document.getElementById('game-board').appendChild(newCard);
}
}

var isMatch = function (cards) {0
	 if (cards[0] === cards[1]){
		alert("You found a match!");
	} else {
		alert("Sorry try again.");
	}
}

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king'){
		this.innerHTML = '<img src="king.png" class="playingCard">';
	} else {
		this.innerHTML = '<img src="queen.png" class="playingCard">';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

createBoard();



