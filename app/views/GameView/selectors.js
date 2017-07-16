// @flow
import { createSelector } from 'reselect'

/**
 * Direct selector to the gameView state domain
 */
const selectGameViewDomain = () => (state: Object) => state.gameView

/**
 * Other specific selectors
 */


/**
 * Default selector used by GameView
 */

const makeSelectGameView = () => createSelector(
  selectGameViewDomain(),
  (substate) => substate
)

export default makeSelectGameView
export {
  selectGameViewDomain,
}
