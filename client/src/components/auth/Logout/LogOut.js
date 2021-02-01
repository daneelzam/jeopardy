import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutFetchAC } from '../../../redux/actionCreators/authAC';

function LogOut() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    history.push('/login');
  }
  dispatch(logoutFetchAC());
  return (
        <div>
        </div>
  );
}

export default LogOut;
