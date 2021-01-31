import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (

        <nav>
            <div className="nav-wrapper indigo accent-4" style={{ height: '80px' }}>

                <a href="#" className="brand-logo" style={{ fontFamily: 'Original Surfer,cursive', fontSize: '55px', color: '#fce4ec' }} >JOPARDY</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    {!isAuth
                      ? <>
                            <li><Link to="/signup">SignUp</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                      : <>
                            <li><Link to="/logout">Logout</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/game">Game</Link></li>
                        </>
                    }
                </ul>
            </div>
        </nav>

  );
}

export default NavBar;
