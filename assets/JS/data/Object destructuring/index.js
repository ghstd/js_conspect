// Object destructuring
//================================================

/*
	Упрощает получение свойств из объектов.
	Поддерживает вложенность и значения по-умолчанию.
	Работает с параметрами функций.
	Поддерживает rest elements.
*/

// названия констант должны совпадать с названиями свойств объекта.
const person = {
	work: 'student',
	age: '20',
	name: {
		first: 'Peter',
		last: 'Smith',
	}
}
const { work, age } = person
console.log(work, age)

// здесь не создается новая константа с именем name,
// это просто указание пути для деструктуризации:
const { name: { first, last } } = person
console.log(first, last)

// можно переименовать деструктурируемые свойства.
const { name: { first: firstItem, last: lastItem } } = person
console.log(firstItem, lastItem)

// можно указать значение по-умолчанию.
const { role = 'user' } = person
console.log(role)

// синтаксис может быть сложным:
const { permissions: { status = 'admin' } = {} } = person
console.log(status)

// rest elements - сохраняет оставшиеся елементы в объект.
const data = {
	host: 'localhost',
	port: 12345,
	user: 'guest'
}
const { host, ...items } = data
console.log(items)

// деструктуризация аргументов функции c
// заданием параметров по умолчанию:
function connect({
	host = 'localhost',
	port = 12345,
	user = 'guest' } = {}) {
	console.log(host, port, user)
}
connect()
