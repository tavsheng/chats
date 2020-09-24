import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{user}, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://www.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Chat-2-512.png"
                    alt="" />
                <div className="login__text">
                    <h1>Зарегистрируйтесь в Чате</h1>
                </div>
                <Button onClick={signIn}>
                    Регистрация через Google
                </Button>
            </div>
        </div>
    )
}

export default Login
