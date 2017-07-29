// @flow
//
import { createSelector } from 'reselect'

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
	let prevRoutingState
	let prevRoutingStateJS

	return (state: Object) => {
		const routingState = state.route

		if (routingState !== prevRoutingState) {
			prevRoutingState = routingState
			prevRoutingStateJS = routingState
		}

		return prevRoutingStateJS
	}
}

const selectGlobalDomain = () => (state: Object) => state.globals

const selectTheme = () => createSelector(
	selectGlobalDomain(),
	(substate) => substate.theme
)

export {
  makeSelectLocationState,
	selectTheme,
}
