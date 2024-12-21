'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
// function transformStateWithClones(state, actions) {
//   const stateHistory = [];
//   const stateCopy = { ...state };

//   for (const action of actions) {
//     if (action.type === 'addProperties') {
//       Object.assign(stateCopy, action.extraData);
//       stateHistory.push(Object.assign({}, stateCopy));
//     } else if (action.type === 'removeProperties') {
//       for (const key of action.keysToRemove) {
//         delete stateCopy[key];
//       }

//       stateHistory.push(Object.assign({}, stateCopy));
//     } else if (action.type === 'clear') {
//       Object.keys(stateCopy).forEach((key) => delete stateCopy[key]);
//       stateHistory.push(Object.assign({}, stateCopy));
//     }
//   }

//   return stateHistory;
// }

function transformStateWithClones(state, actions) {
  const stateHistory = [];
  const stateCopy = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(stateCopy, action.extraData);
        stateHistory.push(Object.assign({}, stateCopy));
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete stateCopy[key];
        }
        stateHistory.push(Object.assign({}, stateCopy));
        break;

      case 'clear':
        Object.keys(stateCopy).forEach((key) => delete stateCopy[key]);
        stateHistory.push(Object.assign({}, stateCopy));
        break;

      default:
        return 'No actions provided';
    }
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
