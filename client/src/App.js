import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/auth/Dashboard/Dashboard';
import Login from './components/auth/Login/Login';
import LogOut from './components/auth/Logout/LogOut';
import SignUp from './components/auth/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import List from './components/Game/List/List';
import Rank from './components/Game/Rank/Rank';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="container row" style={{ width: '800px' }}>
          <Switch>
            <Route exact path="/">
              <Rank/>
            </Route>
            <Route path="/login"><Login /></Route>
            <Route path="/logout"><LogOut /></Route>
            <Route path="/signup"><SignUp /></Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
