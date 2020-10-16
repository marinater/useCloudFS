/* eslint-disable */
const chalk = require('chalk')

const quote = x => chalk.bold('\'' + chalk.blue(x) + '\'')
const action = x => console.log('🚀 ' + chalk.blue(x))
const info = x => console.log('🚨 ' + x)
const question = x => console.log('💭 ' + chalk.blue(x))
const log = (x, indent=0) => console.log('   '.repeat(indent) + x)
const divider = x => console.log()
const err = x => console.log(chalk.bgRedBright(x))

module.exports = { quote, action, info, question, log, divider }