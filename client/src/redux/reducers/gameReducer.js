import { INIT_GAME, RIGHT_ANS } from '../types';

const windowState = JSON.parse((window.localStorage.getItem('state')));

let preloadedState = {};

if (windowState && windowState.game) {
  preloadedState = { frontCards: windowState.game.frontCards, score: windowState.game.score };
} else {
  preloadedState = { frontCards: [], score: 0 };
}

const gameReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case INIT_GAME:
      return {
        ...state,
        frontCards: action.payload.frontCards
      };
    case RIGHT_ANS:
      return {
        ...state,
        score: state.score + action.payload
      };
    default:
      return state;
  }
};

export default gameReducer;
