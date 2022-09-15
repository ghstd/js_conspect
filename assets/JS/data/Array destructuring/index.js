// Array destructuring
//================================================

/*
	При деструктуризации массива значения можно пропускать.
	Поддерживаются значения по-умолчанию.
	Поддерживаются rest elements.
*/

// значения можно пропускать:
const fib = [1, 1, 2, 3, 5, 6, 13]
const [, , a, , b] = fib
console.log(a, b)

// деструктуризации многомерного массива:
const line = [[10, 17], [14, 7]]
const [[p1x, p1y], [p2x, p2y]] = line
console.log(p1x, p1y, p2x, p2y)

// поддерживаются значения по-умолчанию.
const people = ['bob', 'john']
const [first, second, last = 'guest'] = people
console.log(first, second, last)

// rest elements - оставшиеся элементы записываются в массив.
const people1 = ['bob', 'john', 'chris']
const [name, ...others] = people1
console.log(others)

// комбинированный синтаксис деструктуризации массивов и объектов.
const shape = {
	type: 'segment',
	coordinates: {
		start: [10, 15],
		end: [17, 15]
	}
}
const { coordinates: { start: [startX, startY], end: [endX, endY] } } = shape
console.log(startX, startY, endX, endY)