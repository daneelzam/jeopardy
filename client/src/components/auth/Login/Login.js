import {React, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {authSuccessAC} from "../../../redux/actionCreators/authAC";

function Login(props) {
    const dispatch = useDispatch()
    const history = useHistory()

    const [error, setError] = useState()
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

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
        // console.log(process.env.REACT_APP_URL)
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

        <div className="row" style={{margin:"100px auto"}}>
            <form className="col s12" style={{display:"flex" ,flexDirection:"column"}} onSubmit={submitHandler}>
                <div className="row">
                    <div className="input-field col s12">
                        <input onChange={emailHandler} type="text"  placeholder="Enter your email" value={email}/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input onChange={passwordHandler} type="password" name="password" placeholder='Enter your password' value={password}/>
                    </div>
                </div>
                <button className="waves-effect waves-light btn" type="submit">Login</button>
                <div className="new badge red">{error && error}</div>
            </form>
        </div>


    );
}

export default Login;


