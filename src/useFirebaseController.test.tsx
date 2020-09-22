import { renderHook } from '@testing-library/react-hooks'
import { useFirebaseController } from './useFirebaseController'

test('run firebase hook once', () => {
	const { result } = renderHook(() => useFirebaseController())

	expect(result).toHaveProperty('signedIn')
})
