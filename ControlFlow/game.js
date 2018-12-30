//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");

var guess = Number(stringGuess);

//check guess
if(guess)===secretNumber {
	alert("You got it right!!");
}
//otherwise, if guess is higher
else if(guess) > secretNumber {
	alert("Too high. Guess again!")
} else {
	alert("Too low. Guess again!")
}