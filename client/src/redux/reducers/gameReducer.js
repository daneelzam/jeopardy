import {INIT_GAME} from '../types'

const windowState = JSON.parse((window.localStorage.getItem('state')))

let preloadedState = {};

if(windowState && windowState.game){
    preloadedState = {frontCards: windowState.game.frontCards};
} else {
    preloadedState = {frontCards: []};
}

const gameReducer = (state = preloadedState, action) => {
  switch (action.type) {
      case INIT_GAME:
          return {
              ...state,
              frontCards: action.payload.frontCards
          };
      default:
          return state;

  }
}

export default gameReducer
