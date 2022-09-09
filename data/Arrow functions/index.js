// Arrow Functions
//================================================

/*
	В Js функции являются объектами.
	Функции можно передавать в качестве аргументов в другие функции,
	можно присваивать как значения переменным,
	можно возвращать как результат из других функций. 
*/

const sum = (x, y) => x + y
console.log(sum(1, 2))

// удобно использовать в качестве колбэков.

const arr = ['1', '2', '3', '4']

const maxOdd = arr
	.map(el => parseInt(el))
	.filter(num => num % 2)
	.reduce((max, value) => Math.max(max, value), 0)

console.log(maxOdd)

// сорханяет лексическое значение this,
// значение this равно this, где стрелочная функция была создана.
// нет свойства prototype.

const greeter = {
	greet: function (name) {
		console.log('Hi', name)
	},
	greetAll: function (names) {
		names.forEach(name => {
			this.greet(name) // не теряется значение this
		})
	}
}

greeter.greetAll(['Bob', 'Mark'])