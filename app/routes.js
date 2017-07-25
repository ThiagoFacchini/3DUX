// @flow
import { getAsyncInjectors } from './utils/asyncinjectors'

const errorLoading = (err) => {
	console.error('Dynamic page loading failed', err) // eslint-disable-line no-console
}

const loadModule = (cb) => (componentModule) => {
	cb(null, componentModule.default)
}

const pathsLoaded = {}
let currentPath = ''

function onEnterHook (nextState: Object, replace: Function) {
	const routeDefs = nextState.routes[1]
	currentPath = routeDefs.path
}

export default function createRoutes (store: Object) {
  // Create reusable async injectors using getAsyncInjectors factory
	const { injectReducer, injectSagas } = getAsyncInjectors(store) // eslint-disable-line no-unused-vars

	return [
		{
			path: '/',
			name: 'home',
			config: {},
			onEnter: onEnterHook,
			getComponent (nextState: Object, cb: Function) {
				const importModules = Promise.all([
					// $FlowFixMe
					import('views/HomePage'),
				])

				const renderRoute = loadModule(cb)

				importModules.then(([component]) => {
					if (currentPath === '/') {
						renderRoute(component)
					}
				})

				importModules.catch(errorLoading)
			},
		}, {
			path: '*',
			name: 'notfound',
			config: {},
			onEnter: onEnterHook,
			getComponent (nextState: Object, cb: Function) {
				const importModules = Promise.all([
					// $FlowFixMe
					import('views/NotFoundPage'),
				])

				const renderRoute = loadModule(cb)

				importModules.then(([component]) => {
					if (currentPath === '*') {
						renderRoute(component)
					}
				})

				importModules.catch(errorLoading)
			},
		},
	]
}
