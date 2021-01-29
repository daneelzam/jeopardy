import {React, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {authSuccessAC} from "../../../redux/actionCreators/authAC";

function Login(props) {
    const dispatch = useDispatch()
    const history = useHistory()

    const [error, setError] = useState()
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()

    const emailHandler = (event) => {
        const email = event.target.email.value
        setEmail(email)
    }

    const passwordHandler = (event) => {
        const password = event.target.password.value
        setPassword(password)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_URL}/api/auth/login`,{
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email,password})
        }).then(response => response.json())
            .then((serverData) => {
                if(serverData.user){
                    dispatch(authSuccessAC(serverData.user));
                    return history.push('/dashboard')
                }
                return setError('Wrong email or password');
            }).catch(() => setError('Wrong email or password'))
    };




    return (
        <form onSubmit={submitHandler}>
            <input onChange={emailHandler} type="text"  placeholder="Enter your email" value={email}/>
            <input onChange={passwordHandler} type="password" name="password" placeholder='Enter your password' value={password}/>
            <button type="submit">Login</button>
            <div>{error && error}</div>
        </form>
    );
}

export default Login;