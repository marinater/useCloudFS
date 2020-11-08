module.exports = (path) => {
	return path.replace(/\*/g, '.').replace(/:/g, '/')
}