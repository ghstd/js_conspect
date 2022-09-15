// Spread operator for Objects
//================================================

// Расскрывает объект на список ключей:значений, которые будут присвоены другому объекту.
// Удобно комбинировать с любым синтаксисом, который работает при создании объеков.

const defaults = {
	host: 'localhost',
	dbName: 'blog',
	user: 'admin'
}

const opts = {
	user: 'john',
	password: 'qwerty'
}

const port = 8080

const res = { ...defaults, ...opts, port, connect() { } }
console.log(res)