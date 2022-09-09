// Default Parameters
//================================================

/*
	Значения по-умолчанию устанавливаются, если не передать занчение,
	или передать undefined.
	Могут иметь любой тип.
*/

function count(count = 10, start = true) {
	console.log(count, start)
}
count(15)

// значение null считается обычным значением,
// только undefined заменяется на значение по-умолчанию.

function findProducts(defaultPrise = 15, opts = { minPrice: 10, maxPrice: 20 }) {
	console.log(defaultPrise, opts)
}
findProducts(null)