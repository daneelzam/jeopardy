import React from 'react';
import {Link} from "react-router-dom";

function NavBar(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/signup">SignUp</Link>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;