var age = Number(prompt("What is your age?"));

if(age < 0) {
	console.log("Error");
}

if(age===21) {
	console.log("Happy 21st Birthday!!");
}

if(age % 2 !== 0) {
	console.log("Your age is odd");
}

if(age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square");
}

if(age<18) {
	console.log("Please come back another time.")
} else if(age<21) {
	console.log("You may enter with limited privileges.")
} else {
	console.log("Enter and have a great time!");
	alert("Enter and have a great time!");
}