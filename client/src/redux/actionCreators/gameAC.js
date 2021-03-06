import {
  CLEAR_LOCAL_STORAGE,
  GAMES_LIST, GAME_ERROR, INIT_GAME, RIGHT_ANS
} from '../types';

export const initGameAC = (cards) => ({ type: INIT_GAME, payload: cards });
export const rightAnsAC = (score, status) => ({ type: RIGHT_ANS, payload: { score, status } });
export const gameErrorAC = (error) => ({ type: GAME_ERROR, payload: error });
export const gameListAC = (games) => ({ type: GAMES_LIST, payload: games });
export const clearLocalSorage = () => ({ type: CLEAR_LOCAL_STORAGE });

export const initGameFetchAC = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/api/game`)
    .then((res) => res.json())
    .then((data) => dispatch(initGameAC(data)))
    .catch(() => dispatch(gameErrorAC('Server side problems')));
};

export const answerFetchAC = ({ question, answer, user }) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/api/game/${question.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ answer, user })
  }).then((res) => res.json())
    .then((data) => {
      dispatch(rightAnsAC(data.score, data.status));
    });
};

export const gameListFetchAC = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/api/games`)
    .then((res) => res.json())
    .then((games) => dispatch(gameListAC(games)));
};
