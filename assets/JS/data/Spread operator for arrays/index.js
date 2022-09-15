// Spread operator for arrays
//================================================

/*
	Разворачивает массив, превращая его в список аргументов.
*/

const arr1 = [10, 20, 30]
const arr2 = [40, 50, 60]

const result1 = Math.max(...arr1, 70, ...arr2, 100)
console.log(result1)

// удобен для создания поверхностных копий массивов
const shallowCopy = [...arr1, 140]
console.log(shallowCopy)