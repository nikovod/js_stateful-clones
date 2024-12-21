'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateHistory = [];
  const copiedState = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(copiedState, action.extraData);
      stateHistory.push(Object.assign({}, copiedState));
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete copiedState[key];
      }

      stateHistory.push(Object.assign({}, copiedState));
    } else if (action.type === 'clear') {
      Object.keys(copiedState).forEach((key) => delete copiedState[key]);
      stateHistory.push(Object.assign({}, copiedState));
    }
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
