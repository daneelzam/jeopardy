
import {React} from "react";
import { useSelector } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/auth/Dashboard/Dashboard";
import Login from "./components/auth/Login/Login";
import LogOut from "./components/auth/Logout/LogOut";
import SignUp from "./components/auth/SignUp/SignUp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import List from "./components/Game/List/List";

function App() {
  const isAuth = useSelector((state) => {
    return state.auth.isAuth
  })
  return (
      <div>
      <Router>

        <NavBar/>
        <Switch>
            <div className="container row" style={{width: "800px", marginTop: '60px'}}>
            <Route exact path="/"> {isAuth ? <Redirect to='/dashboard'/> : <Redirect to='/login'/>}</Route>
            <Route path="/login"><Login/></Route>
            <Route path="/logout"><LogOut/></Route>
            <Route path="/signup"><SignUp/></Route>
            <PrivateRoute path="/game"> <List/></PrivateRoute>
            <PrivateRoute path="/dashboard"> <Dashboard/></PrivateRoute>
            </div>
        </Switch>
      </Router>
      </div>

  );
}

export default App;
