/* eslint-disable */
const fs = require('fs-extra')
const chalk = require('chalk')
const Confirm = require('prompt-confirm')
const {quote, action, info, question, log, divider, err} = require('../dialog-utils')

const ask = async(x) => {
	const prompt = new Confirm(x)
	return await prompt.run()
}

const runSetup = async () => {
	action('Setting up useCloudFS with Firebase Realtime Database backend')
	divider()


	question('The Firebase implementation has several configuration files that must be deployed to Firebase')
	info("Cloud Functions are located at: " + quote('./node_modules/usecloudfs/config/firebase/functions'))
	info("Database rules are located at:  " + quote('./node_modules/usecloudfs/config/firebase/database.rules.json'))
	info("Storage rules are located at:   " + quote('./node_modules/usecloudfs/config/firebase/storage.rules'))
	log('Installing / upgrading this package will (by definition) update these files')
	divider()

	log('If you do not need to work with these files, point your firebase configuration to the paths above')
	log('If you do need have to work with these files, this script can copy them into your project directory. However ' + chalk.red('you MUST rerun this script') + ' whenever you upgrade this package. Note that this script ' + chalk.red('WILL OVERWRITE') + ' these files if they exist, so use GIT to merge changes if you choose this option')

	const settings = {
		db: await ask('Will you be writing custom database rules?'),
		storage: await ask('Will you be writing custom storage rules?'),
		functions: await ask('Will you be writing custom cloud functions?')
	}

	try {
		if (settings.db) {
			fs.copySync(`${__dirname}/database.rules.json`, `${process.cwd()}/database.rules.json`)
		}
		if (settings.storage) {
			fs.copySync(`${__dirname}/storage.rules`, `${process.cwd()}/storage.rules`)
		}
		if (settings.functions) {
			fs.copySync(`${__dirname}/db`, `${process.cwd()}/functions`)
		}
	} catch (error) {
		err(error)
		return
	}

	log('Files succesfully copied!')
	divider()

	question('The Firebase CLI allows you to easily deploy your configuration to Firebase')
	const copyConfig = await ask('Do you want to automatically generate the firebase.json config file?')
	if (copyConfig) {
		try {
			fs.writeJSONSync('./firebase.json', {
				database: {
					rules: settings.db ? "./database.rules.json" : "./node_modules/usecloudfs/config/firebase/database.rules.json"
				},
				storage: {
					rules: settings.storage ? "./storage.rules" : "./node_modules/usecloudfs/config/firebase/storage.rules"
				},
				functions: {
					source: settings.functions ? "./functions/" : "./node_modules/usecloudfs/config/firebase/functions/"
				}
			})
		} catch (error) {
			err(error)
			return
		}
	}
	divider()

	log('Deployment Steps: ')
	log(quote('yarn global add firebase-cli') + ' to install the Firebase CLI')
	log(quote('firebase login') + ' to authenticate yourself')
	log(quote('firebase deploy') + ' to push Functions, Storage, and Database Rules to your Firebase project')
}

module.exports = runSetup