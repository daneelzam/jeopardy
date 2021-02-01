import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutFetchAC } from '../../../redux/actionCreators/authAC';
import { clearLocalSorage } from '../../../redux/actionCreators/gameAC';

function LogOut() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutFetchAC());
    dispatch(clearLocalSorage());
  }, []);

  return (
        <>
        </>
  );
}

export default LogOut;
