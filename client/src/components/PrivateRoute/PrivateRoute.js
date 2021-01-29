import React from 'react';

import {Redirect,Route} from 'react-router-dom'
import { useSelector} from "react-redux";

function PrivateRoute({children,path}) {
const isAuth = useSelector((state) => {
  return state.auth.isAuth
})
    return (
        <Route>
            {isAuth ? children : <Redirect to='/login'/>}
        </Route>
    );
}

export default PrivateRoute;
