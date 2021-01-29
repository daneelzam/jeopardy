import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {authSuccessAC} from "../../../redux/actionCreators/authAC";


function SignUp(props) {

    const dispatch = useDispatch()
    const history = useHistory();
    const [error, setError] = useState(false);
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')


    const usernameHandler = (event) => {
        const username = event.target.value
        setUsername(username)
    }


    const emailHandler = (event) => {
        const email = event.target.value
        setEmail(email)
    }

    const passwordHandler = (event) => {
        const password = event.target.value
        setPassword(password)
    }


    const submitHandler = (event) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_URL}/api/auth/signup`,{
            method:'POST',
            headers:{
                'Content-Type' :'application/json'
            },
            body: JSON.stringify({username,email,password})
        }).then(res => res.json())
            .then((serverData) => {
                if(serverData.user){
                    dispatch(authSuccessAC(serverData.user));
                    return history.push('/dashboard')
                }
                return setError('Fill the inputs!')
            })
            .catch(() => setError('Fill the inputs!'))
    }



        return (
        <div>
        <form onSubmit={submitHandler}>
            <input onChange={usernameHandler} type="text" placeholder="Enter your name" value={username}/>
            <input onChange={emailHandler} type="text" placeholder="Enter your email" value={email}/>
            <input onChange={passwordHandler} type="password" placeholder='Enter your password' value={password}/>
            <button type="submit">Sign Up</button>
            <div>{error && error}</div>
        </form>
        </div>
    );
}

export default SignUp;