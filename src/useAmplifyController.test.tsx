//import { renderHook } from '@testing-library/react-hooks'
//import { useAmplifyController } from './useAmplifyController'
// @ts-ignore
import * as queries from './graphql/queries';
//import * as mutations from './graphql/mutations';
//import * as subscriptions from './graphql/subscriptions';
import Amplify, { Auth, API } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';



// import all by names



// test('run firebase hook once', () => {
// 	const { result } = renderHook(() => useAmplifyController())

// 	expect(result).toHaveProperty('signedIn')
// })

async function signIn() {
	try {
		const user = await Auth.signIn("test-email", "test-password");
	} catch (error) {
		console.log('error signing in', error);
	}
}


test('testing a graphql query', async () => {
	const allTodos = await API.graphql({ query: queries.listBuckets });
	console.log(allTodos); // result: { "data": { "listTodos": { "items": [/* ..... */] } } }
})





