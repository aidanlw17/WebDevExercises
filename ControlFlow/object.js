var movieOne = {
	name: "In Bruges",
	rating: "5",
	hasWatched: true
}

var movieTwo = {
	name: "Frozen",
	rating: "4.5",
	hasWatched: false
}

var movieThree = {
	name: "Mad Max Fury Road",
	rating: "5",
	hasWatched: true
}

var movieFour = {
	name: "Les Miserables",
	rating: "3.5",
	hasWatched: false
}

var movieArr = [movieOne, movieTwo, movieThree, movieFour];

function movies(arr) {
	arr.forEach(function(object) {
		console.log(buildString(object));
	});
}

function buildString(object) {
	var result = "You have ";
		if(object.hasWatched) {
			result += "seen ";
			//console.log("You have seen \"" + object.name + "\" - " + object.rating);
		} else {
			result += "not seen ";
			//console.log("You have not seen \"" + object.name + "\" - " + object.rating);
		}
		result += "\"" + object.name + "\" - ";
		result += object.rating + " stars";
		return result;
}

movies(movieArr);
















