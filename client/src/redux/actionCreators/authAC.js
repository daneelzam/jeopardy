import { AUTH_ERROR, AUTH_SUCCESSFULLY, LOGOUT } from '../types';

export const authSuccessAC = (user) => ({ type: AUTH_SUCCESSFULLY, payload: user });
export const authErrorAC = (error) => ({ type: AUTH_ERROR, payload: error });

export const logoutAC = () => ({ type: LOGOUT });

// redux-thunk
export const loginFetchAC = ({ email, password }) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then((response) => response.json())
    .then((serverData) => {
      if (serverData.user) {
        dispatch(authSuccessAC(serverData.user));
      }
      dispatch(authErrorAC('Wrong email or password'));
    }).catch(() => dispatch(authErrorAC('Server side error')));
};

export const logoutFetchAC = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/api/auth/logout`)
    .then(() => {
      dispatch(logoutAC());
    });
};

export const signupFetchAC = ({ username, email, password }) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/api/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  }).then((res) => res.json())
    .then((serverData) => {
      if (serverData.user) {
        dispatch(authSuccessAC(serverData.user));
      }
      dispatch(authErrorAC('Incorrect data'));
    }).catch(() => dispatch(authErrorAC('Server side error')));
};
