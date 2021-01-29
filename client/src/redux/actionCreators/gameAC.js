import {INIT_GAME} from '../types'

export const initGameAC = (cards) => ({type: INIT_GAME, payload: cards})
