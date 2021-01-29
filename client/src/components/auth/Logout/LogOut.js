import React,{useEffect} from 'react';
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom'
import {logoutAC} from "../../../redux/actionCreators/authAC";


function LogOut(props) {
    const history = useHistory();
    const dispatch = useDispatch()
    console.log('huy')

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/api/auth/logout`)
            .then(() => {
                dispatch(logoutAC());
                history.push('/')
            })
    })
    return (
        <div>
        </div>
    );
}

export default LogOut;