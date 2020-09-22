import { renderHook } from '@testing-library/react-hooks'
import { useAmplifyController } from './useAmplifyController'

test('run firebase hook once', () => {
	const { result } = renderHook(() => useAmplifyController())

	expect(result).toHaveProperty('signedIn')
})
