console.log("Print all numbers b/w -10 and 19")

var counter = -10;

while(counter<20) {
	console.log(counter);
	counter++;
}

//---------------------//

console.log("Print all even numbers b/w 10 and 40")

var secondNum = 10;

while(secondNum<=40) {
	console.log(secondNum);
	secondNum+=2
}

//--------------------//

console.log("Print all odd numbers b/w 300 and 333")

var thirdNum = 301;

while(thirdNum <= 333) {
	console.log(thirdNum);
	thirdNum+=2;
}

// thirdNum = 300;

// while(thirdNum <= 333) {
// 	if(thirdNum % 2 !== 0) {
// 		console.log(thirdNum);
// 	}
// 	thirdNum++;
// }

//----------------------//

console.log("Print all numbers divisible by 5 and 3 b/w 5 and 50")

var fourthNum = 5;

while(fourthNum <= 50) {
	if((fourthNum % 5 == 0) && (fourthNum % 3 == 0)) {
		console.log(fourthNum);
	}
	fourthNum++;
} 
