import React from 'react';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux'

function NavBar(props) {
  const isAuth = useSelector((state) => {
    return state.auth.isAuth
  })
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {!isAuth 
                ? 
                  <><li><Link to="/signup">SignUp</Link></li>
                  <li><Link to="/login">Login</Link></li></> 
                :                 
                  <><li><Link to="/logout">Logout</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/game">Game</Link></li></>
                  }
            </ul>
        </div>
    );
}

export default NavBar;
