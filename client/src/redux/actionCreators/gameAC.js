import {INIT_GAME, RIGHT_ANS} from '../types'

export const initGameAC = (cards) => ({type: INIT_GAME, payload: cards})
export const rightAnsAC = (score) => ({type: RIGHT_ANS, payload: score})
