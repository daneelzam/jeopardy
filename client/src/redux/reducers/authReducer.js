import { AUTH_ERROR, AUTH_SUCCESSFULLY, LOGOUT } from '../types';

const windowState = JSON.parse((window.localStorage.getItem('state')));

let preloadedState = {};

if (windowState && windowState.auth) {
  preloadedState = {
    isAuth: windowState.auth.isAuth,
    authError: null,
    user: windowState.auth.user
  };
} else {
  preloadedState = { isAuth: false, authError: false, user: { email: '', username: '' } };
}

const authReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case AUTH_SUCCESSFULLY:
      return {
        ...state,
        isAuth: true,
        authError: false,
        user: action.payload
      };
    case LOGOUT:
      window.localStorage.removeItem('state');
      return {
        ...state,
        isAuth: false,
        authError: false,
        user: { email: '', username: '' }
      };
    case AUTH_ERROR:
      return {
        ...state,
        authError: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
