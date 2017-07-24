// @flow
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

 // --------------------------------------------------------
 // REACT / REDUX IMPORTS
 // --------------------------------------------------------
import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
// --------------------------------------------------------

// --------------------------------------------------------
// INTERNATIONALISATION SUPPORT
// --------------------------------------------------------
import messages from './messages'
// --------------------------------------------------------

// --------------------------------------------------------
// STYLING IMPORTS
// --------------------------------------------------------
import classNames from 'classnames'
import styles from './styles.css'
import grid from './../../styles/grid.css'
// --------------------------------------------------------

export class HomePage extends React.PureComponent {
	render () {
		return (
			<div className={classNames(styles.homepage, styles.standard)}>
				<p>
					<FormattedMessage {...messages.header} />
				</p>
				or
				<p>
				{this.props.intl.formatMessage(messages.header)}
				</p>
			</div>
		)
	}
}

export default injectIntl(HomePage)
