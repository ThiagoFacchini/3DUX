// @noflow

import Immutable from 'seamless-immutable'
import gameViewReducer from '../reducer'

describe('gameViewReducer', () => {
	it('returns the initial state', () => {
		expect(gameViewReducer(undefined, {})).toEqual({})
	})
})
