import { useContext, useState } from 'react';
import { LoginContext } from '../../contexts/login.context';
import ButtonTwo from '../button-two/button-two-component';
import {ReactComponent as GoogleIcon} from '../../assets/google-icon.svg';
import {ReactComponent as EmailIcon} from '../../assets/email-icon.svg';
import {ReactComponent as FacebookIcon} from '../../assets/facebook-icon.svg';

const LoginPopupSignup = () => {
    const { isPopupOpen, setIsPopupOpen, isSignUpOpen, setIsSignUpOpen } = useContext(LoginContext);
    const togglePopup = () => setIsPopupOpen(!isPopupOpen);
    const toggleSignUpForm = () => setIsSignUpOpen(!isSignUpOpen);

    return(
        <div className="login-section">
            <h2 className="sign-up-header">
                Join Whatever. <br/> <br/>
            </h2>
            <div className="sign-up-button-list">
                <ButtonTwo name='Google' svg={GoogleIcon} signup ='up'/>
                <ButtonTwo name='Facebook' svg={FacebookIcon} signup ='up'/>
                <ButtonTwo name='Email' svg={EmailIcon} signup ='up'/>
            </div>
            <div className="sign-in-button-container">
                <br/><br/>Already have an account? <br/>
                <button className='sign-in-button' onClick={toggleSignUpForm}>Sign In</button>
            </div>
            <div className="login-popup-footer">
                &#169; Isaac Ma 2022
            </div>
            <button className='popup-close' onClick={togglePopup}>&#10005;</button>
        </div>
    )
}
export default LoginPopupSignup;