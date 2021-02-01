import { INIT_GAME, RIGHT_ANS } from '../types';

export const initGameAC = (cards) => ({ type: INIT_GAME, payload: cards });
export const rightAnsAC = (id, score = 0) => ({ type: RIGHT_ANS, payload: { score, id } });
