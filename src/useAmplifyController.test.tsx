//import { renderHook } from '@testing-library/react-hooks'
//import { useAmplifyController } from './useAmplifyController'
//@ts-ignore
import * as queries from './graphql/queries';
//import * as mutations from './graphql/mutations';
//import * as subscriptions from './graphql/subscriptions';
import Amplify, { Auth, API } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

//import { withAuthenticator } from 'aws-amplify-react';
//export default withAuthenticator(useAmplifyController);


// import all by names



// test('run firebase hook once', () => {
// 	const { result } = renderHook(() => useAmplifyController())

// 	expect(result).toHaveProperty('signedIn')
// })

// async function signIn() {
// 	try {
// 		const user = await Auth.signIn("test-email", "test-password");
// 	} catch (error) {
// 		console.log('error signing in', error);
// 	}
// }

// Amazon Cognito creates a session which includes the id, access, and refresh tokens of an authenticated user.

// async function signUp() {
// 	try {
// 		const { user } = await Auth.signUp({
// 			username: "test-email",
// 			password: "test-password"
// 		});
// 		console.log(user);
// 	} catch (error) {
// 		console.log('error signing up:', error);
// 	}
// }

async function signIn() {
	try {
		const user = await Auth.signIn("test-email", "test-password");
	} catch (error) {
		console.log('error signing in', error);
	}
}

// async function listBuckets() {
// 	try {
// 		const user = await API.graphql({ query: queries.listBuckets });
// 	} catch (error) {
// 		console.log('error listing buckets', error);
// 	}
// }



test('testing a graphql query', async () => {
	try {
		const allTodos = await API.graphql({ query: queries.listBuckets });
		console.log(allTodos);
	} catch (error) {
		console.log('error', error);
	}
	//const allTodos = await API.graphql({ query: queries.listBuckets });
	//console.log(allTodos); //result: { "data": { "listTodos": { "items": [/* ..... */] } } }
})










