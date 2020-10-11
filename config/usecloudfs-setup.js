#!/usr/bin/env node
/* eslint-disable */

const Confirm = require('prompt-confirm')
const runFirebaseSetup = require('./firebase/runSetup')
const {quote, action, info, question, log, divider} = require('./dialog-utils')

const runSetup = async () => {
    question('useCloudFS provides built in support for Firebase and Amplify. You can use one, none, or both in your project')
    log('If you choose one of our integrations, we will provide Cloud Functions and Security Rule files that you must setup on the platform')
    const setupIntegrationPrompt = new Confirm('Would you like us to set up an integration now?')
    const setupIntegration = await setupIntegrationPrompt.run()
    if (!setupIntegration) {
        log('No changes will me made.')
        log('Note that without an integration, you will have to setup a backend controller interface yourself')
        return
    }

    const runFirebaseSetupPrompt = new Confirm('Would you like to run Firebase setup?')
    const shouldRunFirebaseSetup = await runFirebaseSetupPrompt.run()
    if (shouldRunFirebaseSetup) {
        await runFirebaseSetup()
    }
}

runSetup()

