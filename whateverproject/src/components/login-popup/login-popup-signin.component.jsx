import { useContext, useState } from 'react';
import { LoginContext } from '../../contexts/login.context';
import ButtonTwo from '../button-two/button-two-component';
import {ReactComponent as GoogleIcon} from '../../assets/google-icon.svg';
import {ReactComponent as EmailIcon} from '../../assets/email-icon.svg';
import {ReactComponent as FacebookIcon} from '../../assets/facebook-icon.svg';
import { signInWithGooglePopup } from '../../utils/firebase.utils';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ButtonClose from '../button-close/button-close.component';
import { useDispatch } from 'react-redux';
import { createAction } from '../../utils/reducer/reducers.utils';
import { LOGINPOPUP_ACTION_TYPES } from '../../store/loginpopup/loginpopup.types';
import EmailSignIn from '../email-login/email-login-signin.component';

const LoginPopupSignIn = () => {
    const dispatch = useDispatch();
    const toggleSignUpForm = () => dispatch(createAction(LOGINPOPUP_ACTION_TYPES.SET_SIGNUP_OPEN))
    const navigate = useNavigate();
    const toEmailSignIn = () => dispatch(createAction(LOGINPOPUP_ACTION_TYPES.SET_EMAIL_SIGNIN_OPEN));


    const logGoogleUser = async() => {
        await signInWithGooglePopup();
    }

    // const loginNavigate = () => {
    //     return currentUser ? navigate("/home"):console.log('error navigating to homepage');
    // }
    

    return(
        <div className="login-section">
            <h2 className="sign-up-header">
                Welcome back. <br/> <br/>
            </h2>
            <div className="sign-up-button-list">
                <ButtonTwo name='Google' svg={GoogleIcon} signup ='in' type='button' func={logGoogleUser}/>
                <ButtonTwo name='Facebook' svg={FacebookIcon} signup ='in'/>
                <ButtonTwo name='Email' svg={EmailIcon} signup ='in'  func={toEmailSignIn}/>
            </div>
            <span className="forgot-password">
                <br/>Forgot password?
            </span>
            <div className="sign-in-button-container">
                <br/><br/>Don't have an account? <br/>
                <button className='sign-in-button' onClick={toggleSignUpForm}>Sign Up</button>
            </div>
            <div className="login-popup-footer">
                &#169; Isaac Ma 2022
            </div>
            <ButtonClose/>
        </div>
    )
}
export default LoginPopupSignIn;

