import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginFetchAC } from '../../../redux/actionCreators/authAC';

function Login() {
  const authError = useSelector((state) => state.auth.authError);

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    dispatch(loginFetchAC({ email, password }));
  };

  return (
    <div className="row" style={{ margin: '100px auto' }}>
            <form className="col s12" style={{ display: 'flex', flexDirection: 'column' }} onSubmit={submitHandler}>
                <div className="row">
                    <div className="input-field col s12">
                        <input onChange={emailHandler} type="text" placeholder="Enter your email" value={email}/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input onChange={passwordHandler} type="password" name="password" placeholder='Enter your password' value={password}/>
                    </div>
                </div>
                <button className="waves-effect waves-light btn" type="submit">Login</button>
                <div className="new badge red">{authError && authError}</div>
            </form>
      </div>
  );
}

export default Login;
