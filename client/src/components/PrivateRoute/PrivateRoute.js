import React from 'react';

import {Redirect,Route} from 'react-router-dom'
import { useSelector} from "react-redux";

function PrivateRoute({children,path}) {
let isAuth = false
    return (
        <Route>
            {isAuth ? children : <Redirect to='/login'/>}
        </Route>
    );
}

export default PrivateRoute;