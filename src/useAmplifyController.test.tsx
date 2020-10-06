import { renderHook } from '@testing-library/react-hooks'
import { useAmplifyController } from './useAmplifyController'
// @ts-ignore
import * as queries from './graphql/queries';
//import * as mutations from './graphql/mutations';
//import * as subscriptions from './graphql/subscriptions';

// import all by names


import { API } from 'aws-amplify';

test('run firebase hook once', () => {
	const { result } = renderHook(() => useAmplifyController())

	expect(result).toHaveProperty('signedIn')
})

test('testing a graphql query', async () => {
	const allTodos = await API.graphql({ query: queries.listBuckets });
	console.log(allTodos); // result: { "data": { "listTodos": { "items": [/* ..... */] } } }
})