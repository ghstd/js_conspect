// Rest parameter
//================================================

/*
	Rest parameter является массивом,
	получает аргументы, которые не были присвоены обычным параметрам.
	Rest parameter обязан идти последним в функции.
	Может быть только один rest parameter.
*/

// Псевдо-массив arguments:
function max() {
	var numbers = Array.prototype.slice.call(arguments)
}

// Rest parameter:
function num(a, b, ...numbers) {
	console.log(numbers)
}

num(5, 6, 7, 8, 9) // ==> [7, 8, 9]

num() // ==> []