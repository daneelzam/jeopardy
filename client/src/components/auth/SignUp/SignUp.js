import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signupFetchAC } from '../../../redux/actionCreators/authAC';

function SignUp() {
  const history = useHistory();

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth) {
    history.push('/dashboard');
  }
  const authError = useSelector((state) => state.auth.authError);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHandler = (event) => {
    const usernameUser = event.target.value;
    setUsername(usernameUser);
  };

  const emailHandler = (event) => {
    const emailUser = event.target.value;
    setEmail(emailUser);
  };

  const passwordHandler = (event) => {
    const passwordUser = event.target.value;
    setPassword(passwordUser);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(signupFetchAC({ username, email, password }));
  };

  return (
            <div className="row" style={{ margin: '100px auto' }} >
    <form className="col s12" onSubmit={submitHandler} >
        <div className="row">
            <div className="input-field col s12">
                <input onChange={usernameHandler} type="text" placeholder="Enter your name" value={username}/>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <input onChange={emailHandler} type="text" placeholder="Enter your email" value={email}/>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <input onChange={passwordHandler} type="password" placeholder='Enter your password' value={password}/>
            </div>
        </div>
        <button className="waves-effect waves-light btn" type="submit">Login</button>
        <div className="new badge red">{authError && authError}</div>
    </form>
</div>

  );
}

export default SignUp;
