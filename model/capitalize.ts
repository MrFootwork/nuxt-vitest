function capitalize(stringToCapitalize) {
	if (!stringToCapitalize) return ''
	const letters = [...stringToCapitalize]
	letters[0] = letters[0].toUpperCase()
	return letters.join('')
}
export default capitalize
