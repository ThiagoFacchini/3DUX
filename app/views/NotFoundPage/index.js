// @flow

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

export class NotFound extends React.PureComponent {
	render () {
		return (
			<div className={classNames(styles.notfound, styles.standard)}>
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

export default injectIntl(NotFound)
