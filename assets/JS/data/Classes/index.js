// Classes
//================================================

/*
	Класс - одно из базовых понятий объктно-ориентированного
	программирования.
	И хоть JS построен не на классах, а на прототипах,
	в нем существует паттерн использования функций-конструкторов
	и прототипного наследования для работы с ооп кодом.
	Этот паттерн называется класс.
*/

function Animal1(name, voice) {
	this.name = name
	this.voice = voice
}

Animal1.prototype.say = function () {
	console.log(this.name, 'goes', this.voice)
}

const dog = new Animal1('dog', 'woof')
dog.say()

// Перепишем функцию Animal в виде класса:

class Animal {

	constructor(name, voice) {
		this.name = name
		this.voice = voice
	}

	say() {
		console.log(this.name, 'goes', this.voice)
	}
}

// ключевое слово extends - означает что классы будут
// состоять в цепочке прототипов:
// duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null

// если не указать явно constructor, то класс наследует constructor
// своего супер-класса.
class Bird extends Animal {
}

const duck = new Bird('duck', 'quack')
duck.say()

// если класс наследует другой класс, в его constructor нужно вызвать
// constructor родительского супер-класса используя super().
// super() нужно использовать перед тем, как использовать this.

class Cat extends Animal {
	constructor(name, voice, canJump) {
		super(name, voice)
		super.say() // из конструктора можно вызывать методы
		this.canJump = canJump
	}
	// методы супер-класса можно переопределять
	say() {
		console.log(this.name, 'dont like to talk')
	}
}

const cat = new Cat('cat', 'meow', true)
cat.say()

// Class properties
//================================================

// инициализация свойств прямо в теле класса:
// если свойства не зависят от внешних параметров,
// можно не создавать конструктор.

class Counter {
	count = 0
}

// функции, которые автоматически привязаны к созданному объекту.
// this в этих функциях всегда будет тот объект, с которым эта
// функция была создана.
// эти функции удобно использовать как обработчики событий.

class Counter1 {
	count = 0

	increment = () => {
		this.count++
		console.log(this.count)
	}
}

const counter = new Counter1()
counter.increment()
setTimeout(counter.increment, 1000) // не теряется значение this

// статические свойства и методы.
// это свойства, которые принадлежат классу.
// начинаются с ключевого слова static.

class Counter2 {

	static incStep = 5
	static incAll(arr) {
		arr.forEach(i => console.log(i + Counter2.incStep))
	}
}

Counter2.incAll([10, 20, 30, 40])