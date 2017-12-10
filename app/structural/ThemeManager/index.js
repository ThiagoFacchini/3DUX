// @flow
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectTheme } from './selectors.js'
import { setTheme } from './actions'

export default function themeManager (WrappedComponent: ReactClass<any>) {
	type PropTypes = {
		theme: string,
		setTheme: Function
	}

	const _defaultProps = {
		theme: 'default',
		setTheme: () => null
	}

	class ThemeManager extends React.Component {
		props: PropTypes
		static defaultProps: PropTypes

		render () {
			const attachProps = {
				theme: {
					getTheme: () => this.props.theme,
					setTheme: (theme) => this.props.setTheme(theme)
				}
			}
			return (
				<div>
					<WrappedComponent {...attachProps} />
				</div>
			)
		}
	}

	const mapStateToProps = createStructuredSelector({
		theme: selectTheme
	})

	const mapDispatchToProps = (dispatch: (arg?: any) => void) => ({
		setTheme: (theme: string) => dispatch(setTheme(theme))
	})

	ThemeManager.defaultProps = _defaultProps

	return connect(mapStateToProps, mapDispatchToProps)(ThemeManager)
}
