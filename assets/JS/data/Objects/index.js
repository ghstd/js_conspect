// Objects
//================================================

// Короткая запись свойства: если имя свойста совпадает с именем переменной.
// Короткая запись метода.

const x = 10
const y = 30

const point = {
	x: x,
	y: y,
	draw: function () { }
}

const p = {
	x,
	y,
	draw() { }
}
console.log(point, p)

//================================================

// При создании объектов можно использовать значения ключей, которые вычисляются динамически.

const prefix = '_some_'

const data = {
	[prefix + 'name']: 'Bob',
	[prefix + 'age']: 23
}
console.log(data) // ==> {_some_name: 'Bob', _some_age: 23}

//================================================

// Object.assign()

const defaults = {
	host: 'localhost',
	dbName: 'blog',
	user: 'admin'
}

const opts = {
	user: 'john',
	password: 'qwerty'
}

// Первый объект получит значения свойств из остальных объктовю
// Возвращает первый аргумент.

const res1 = Object.assign(defaults, opts)
console.log(defaults) // ==> {host: 'localhost', dbName: 'blog', user: 'john', password: 'qwerty'}

// Чтобы не изменять значения объекта defaults:
const res2 = Object.assign({}, defaults, opts)