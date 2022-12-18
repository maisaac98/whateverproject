import './login-popup.component.scss';
import { useContext, useState } from 'react';
import { LoginContext } from '../../contexts/login.context';
import LoginPopupSignup from './login-popup-signup.component';
import LoginPopupSignIn from './login-popup-signin.component';

const LoginPopup = () => {
    const { isSignUpOpen, setIsSignUpOpen } = useContext(LoginContext);

    return (
        <div className="login-popup-container">
            <div className="login-popup">
                {isSignUpOpen&&<LoginPopupSignup/>}
                {!isSignUpOpen&&<LoginPopupSignIn/>}
            </div>
        </div>
    )
}

export default LoginPopup;