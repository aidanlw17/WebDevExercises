// function isEven(num) {
// 	if(num % 2 === 0) {
// 		return true;
// 	} return false;
// }

function isEven(num) {
	return num % 2 === 0;
}

// function factorial(num) {

// 	if(num===0){
// 		return 1;
// 	}

// 	var number = num;

// 	for(var i = num-1; i > 0; i--) {
// 		number = i*number;
// 	} return number;
// }

function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}

function factorial(num) {
	var result = 1;
	for(i=2; i<=num; i++) {
		result *= i;
	}
	return result;
}


console.log("isEven Test");
console.log(isEven(5));
console.log(isEven(6));

console.log("factorial Test");
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

console.log("kebabToSnake Test");
console.log(kebabToSnake("is-this-working"));