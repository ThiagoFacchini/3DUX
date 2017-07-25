// @flow
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

export {
  makeSelectLocationState,
}
