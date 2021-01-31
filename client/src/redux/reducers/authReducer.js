import React from 'react';
import { AUTH_SUCCESSFULLY, LOGOUT } from '../types';

const windowState = JSON.parse((window.localStorage.getItem('state')));

let preloadedState = {};

if (windowState && windowState.auth) {
  preloadedState = { isAuth: windowState.auth.isAuth, user: windowState.auth.user };
} else {
  preloadedState = { isAuth: false, user: { email: '', username: '' } };
}

const authReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case AUTH_SUCCESSFULLY:
      return {
        ...state,
        isAuth: true,
        user: action.payload
      };
    case LOGOUT:
      window.localStorage.removeItem('state');
      return {
        ...state,
        isAuth: false,
        user: { email: '', username: '' }
      };
    default:
      return state;
  }
};

export default authReducer;
