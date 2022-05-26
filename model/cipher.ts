const cipher = function (text) {
	const originalLetters = [...text]

	const shiftedLetters = originalLetters.map(char => {
		const SHIFT = 1
		const code = char.charCodeAt(0)

		const isLetter = (97 <= code && code <= 122) || (65 <= code && code <= 90)
		if (!isLetter) return char

		const isCapital = 65 <= code && code <= 90
		const baseCode = isCapital ? 65 : 97
		const shiftedCode = (code - baseCode + SHIFT) % 26

		return String.fromCharCode(baseCode + shiftedCode)
	})

	return shiftedLetters.join('')
}

export default cipher
