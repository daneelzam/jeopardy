import { GAME_ERROR, INIT_GAME, RIGHT_ANS } from '../types';

export const initGameAC = (cards) => ({ type: INIT_GAME, payload: cards });
export const rightAnsAC = (id, score = 0) => ({ type: RIGHT_ANS, payload: { score, id } });
export const gameErrorAC = (error) => ({ type: GAME_ERROR, payload: error });

export const initGameFetchAC = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/api/game`)
    .then((res) => res.json())
    .then((data) => dispatch(initGameAC(data)))
    .catch(() => dispatch(gameErrorAC('Server side problems')));
};
