// @flow
/*
 *
 * GameView
 *
 */

// --------------------------------------------------------
// REACT / REDUX IMPORTS
// --------------------------------------------------------
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import makeSelectGameView from './selectors'
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

export class GameView extends React.Component {
	propTypes: PropTypes

	static defaultProps: PropTypes

	// --------------------------------------------------------
	// DECLARATION FOR HELPER FUNCTIONS
	// --------------------------------------------------------
	// --------------------------------------------------------

	// --------------------------------------------------------
	// HELPER FUNCTIONS
	// --------------------------------------------------------
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT CONSTRUCTOR
	// --------------------------------------------------------
	constructor (props: Object) {
		super(props)
	}
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT LIFE CYCLES
	// --------------------------------------------------------
	componentWillMount () {}

	render () {
		console.log('aqui')
		console.log(styles)
		console.log(classNames(styles.gameview))
		console.log('-----')
		return (
      <div className={classNames(styles.gameview)}>
        <Helmet
          title="GameView"
          meta={[ { name: 'description', content: 'Description of GameView' } ]}
        />
				<div className={classNames(styles.teste)}>
					aqui vai algo
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
		dispatch,
	}
}

// --------------------------------------------------------
// SELECTORS MAP
// --------------------------------------------------------
const mapStateToProps = createStructuredSelector({
	gameView: makeSelectGameView(),
})

// --------------------------------------------------------
// SETTING CONTAINER.DEFAULTPROPS
// --------------------------------------------------------
GameView.defaultProps = _defaultProps
// --------------------------------------------------------


export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(GameView))
