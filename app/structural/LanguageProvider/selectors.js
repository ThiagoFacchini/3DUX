// @flow
import { createSelector } from 'reselect'

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = (state: Object) => state.language

/**
 * Select the language locale
 */

const makeSelectLocale = () => createSelector(
  selectLanguage,
  (languageState) => languageState.locale
)

export {
  selectLanguage,
  makeSelectLocale,
}
