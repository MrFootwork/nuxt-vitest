const analyzeArray = function (array) {
	const length = array.length
	const min = Math.min(...array)
	const max = Math.max(...array)
	const average = array.reduce((average, cur) => {
		return average + cur / length
	}, 0)

	return {
		average,
		min,
		max,
		length,
	}
}

export default analyzeArray
