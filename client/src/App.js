
import {React} from "react";
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

function App() {
  const isAuth = false
  return (
      <div>
      <Router>
        <NavBar/>
        <Switch>
            <Route exact path="/"> {isAuth ? <Redirect to='/dashboard'/> : <Redirect to='/login'/>}</Route>
            <Route path="/login"><Login/></Route>
            <Route path="/logout"><LogOut/></Route>
            <Route path="/signup"><SignUp/></Route>
            <PrivateRoute path="/dashboard"> <Dashboard/></PrivateRoute>
        </Switch>
      </Router>
      </div>

  );
}

export default App;
