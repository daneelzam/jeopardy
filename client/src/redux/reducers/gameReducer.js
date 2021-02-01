import { GAME_ERROR, INIT_GAME, RIGHT_ANS } from '../types';

const windowState = JSON.parse((window.localStorage.getItem('state')));

let preloadedState = {};

if (windowState && windowState.game) {
  preloadedState = {
    frontCards: windowState.game.frontCards,
    score: windowState.game.score,
    status: windowState.game.status,
    gameError: null
  };
} else {
  preloadedState = {
    frontCards: [], score: 0, status: [], gameError: null
  };
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
        score: action.payload.score,
        status: [...action.payload.status]
      };
    case GAME_ERROR:
      return {
        ...state,
        gameError: action.payload
      };
    default:
      return state;
  }
};

export default gameReducer;
