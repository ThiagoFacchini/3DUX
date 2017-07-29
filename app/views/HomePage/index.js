// @flow
/*
 *
 * HomePage
 *
 */

// --------------------------------------------------------
// REACT / REDUX IMPORTS
// --------------------------------------------------------
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import makeSelectHomePage from './selectors'

import {
	selectTheme,
	selectBrowsingDevice,
} from './../../structural/App/selectors'
// --------------------------------------------------------

// --------------------------------------------------------
// INTERNATIONALISATION SUPPORT
// --------------------------------------------------------
import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'
// --------------------------------------------------------

// --------------------------------------------------------
// STYLING IMPORTS
// --------------------------------------------------------
import classNames from 'classnames'
import styles from './styles.css'
import grid from './../../styles/grid.css'

import { images } from './../../styles/assets'
// --------------------------------------------------------

// --------------------------------------------------------
// COMPONENT / CONTAINER IMPORTS
// --------------------------------------------------------
import Helmet from 'react-helmet'
// --------------------------------------------------------

// --------------------------------------------------------
// COMPONENT PROPERTIES DEFINITION
// --------------------------------------------------------
type PropTypes = {}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES COMPONENT DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {}
// --------------------------------------------------------

export class HomePage extends React.Component {
	propTypes: PropTypes

	static defaultProps: PropTypes

	// --------------------------------------------------------
	// DECLARATION FOR HELPER FUNCTIONS
	// --------------------------------------------------------
	_getBrowsingDevice: Function
	// --------------------------------------------------------

	// --------------------------------------------------------
	// HELPER FUNCTIONS
	// --------------------------------------------------------
	_getBrowsingDevice () {
		switch (this.props.selectorBrowsingDevice) {
		case 'tablet':
			return images.tabletScreen
		case 'mobile':
			return images.mobileScreen
		default:
			return images.computerScreen
		}
	}
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT CONSTRUCTOR
	// --------------------------------------------------------
	constructor (props: Object) {
		super(props)

		this._getBrowsingDevice = this._getBrowsingDevice.bind(this)
	}
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT LIFE CYCLES
	// --------------------------------------------------------
	componentWillMount () {}

	render () {
		return (
      <div className={classNames(styles.homepage, styles[this.props.selectorTheme], styles[this.props.selectorBrowsingDevice])}>
        <Helmet
          title="HomePage"
          meta={[ { name: 'description', content: 'Description of HomePage' } ]}
        />
				<div className={classNames(styles.welcomeMessage)}>
					<img src={this._getBrowsingDevice()}/>
					<div className={classNames(styles.title)}>
						Welcome!!!<br/>
					</div>
					<div className={classNames(styles.subtitle)}>
						This is the HomePage stylised by { this.props.selectorTheme } theme.<br/><br/>
						You are browsing this page using a { this.props.selectorBrowsingDevice }
					</div>
				</div>
      </div>
		)
	}

	componentDidMount () {}
	// --------------------------------------------------------
}

// --------------------------------------------------------
// ACTIONS MAP
// --------------------------------------------------------
function mapDispatchToProps (dispatch) {
	return {
		actions: {
			dispatch,
		}
	}
}

// --------------------------------------------------------
// SELECTORS MAP
// --------------------------------------------------------
const mapStateToProps = createStructuredSelector({
	HomePage: makeSelectHomePage(),
	selectorTheme: selectTheme(),
	selectorBrowsingDevice: selectBrowsingDevice(),
})

// --------------------------------------------------------
// SETTING CONTAINER.DEFAULTPROPS
// --------------------------------------------------------
HomePage.defaultProps = _defaultProps
// --------------------------------------------------------


export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HomePage))
