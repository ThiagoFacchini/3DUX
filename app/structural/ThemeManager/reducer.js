// @flow
/*
 *
 * HomePage reducer
 *
 */

import Immutable from 'seamless-immutable'
import {REHYDRATE} from 'redux-persist/constants'

import {
  DEFAULT_ACTION,
	SET_THEME,
} from './constants'

const initialState = Immutable({
	theme: 'default'
})

function themeManagerReducer (state: Object = initialState, action: { type: string, payload: any }) {
	console.log('themeManagerReducer called')
	console.log('outside is', state.set)
	switch (action.type) {
	case DEFAULT_ACTION:
		return state

	case SET_THEME:
	console.log(action)
	console.log('inside is')
	console.log(state)
	console.log('---------------')
		return state.set('theme', action.payload.theme)

	case REHYDRATE:
		const incoming = action.payload.themeManagerReducer
		if (incoming) return { ...state, ...incoming }
		return state

	default:
	console.log(action)
	console.log('state is')
	console.log(state)	
		return state
	}
}

export default themeManagerReducer
