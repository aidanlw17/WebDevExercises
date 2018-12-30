console.log("printReverse Function")

function printReverse(array) {
	//create a new array
	var newArray = [];
	//place each item from array into newArray
	array.forEach(function(array){
		newArray.unshift(array);
	})
	console.log("The first array is " + array)
	console.log("The reverse array is " + newArray);
}

//or 

// function printReverse(arr) {
// 	for(var i= arr.length - 1; i >=0; i--) {
// 		console.log(arr[i]);
// 	}
// }

printReverse([1,2,3,4]);

console.log("************")

//**** isUniform() *****//

// function isUniform(array) {
// 	var uniform = true;
// 	array.forEach(function(item, i) {
// 		if(array[i] !== array[0]) {
// 			uniform = false;
// 		}
// 	});
// 	return uniform;
// }

function isUniform(arr) {
	var first = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== arr[0]) {
			return false;
		}
	}
	return true;
}

console.log(isUniform([1,2,1,1,2]));
console.log(isUniform([1,1,1,1,1]));

console.log("************")

function sumArray(array) {
	var result = 0;
	array.forEach(function(item) {
		result += item;
	});
	return result;
}

console.log(sumArray([1,2,3,4]));
console.log(sumArray([1,3,3,4]));

console.log("************")

function max(array) {
	var max = array[0];
	array.forEach(function(item) {
		if(item > max) {
			max = item;
		}
	});
	return max;
}

console.log(max([1,2,3,4,5,9,2,6,12,24,3]))
console.log(max([1,2,3,4]));














