const splitPath = (fileName) => {
	if (!fileName) return ['', '']
	const path = fileName.split('/')
	const tail = path.pop().replace(/\./g, '*')
	const head = path.join(':')
	return [head, tail]
}


module.exports = splitPath