import { useContext, useState } from 'react';
import { LoginContext } from '../../contexts/login.context';
import ButtonTwo from '../button-two/button-two-component';
import {ReactComponent as GoogleIcon} from '../../assets/google-icon.svg';
import {ReactComponent as EmailIcon} from '../../assets/email-icon.svg';
import {ReactComponent as FacebookIcon} from '../../assets/facebook-icon.svg';
import { useDispatch } from 'react-redux';
import { createAction } from '../../utils/reducer/reducers.utils';
import { LOGINPOPUP_ACTION_TYPES } from '../../store/loginpopup/loginpopup.types';
import ButtonClose from '../button-close/button-close.component';
import { signInWithGooglePopup } from '../../utils/firebase.utils';

const LoginPopupSignup = () => {
    const dispatch = useDispatch();
    const toEmailSignUp = () => dispatch(createAction(LOGINPOPUP_ACTION_TYPES.SET_EMAIL_SIGNUP_OPEN));
    const toSignIn = () => dispatch(createAction(LOGINPOPUP_ACTION_TYPES.SET_SIGNIN_OPEN));
    const toEmailSignIn = () => dispatch(createAction(LOGINPOPUP_ACTION_TYPES.SET_EMAIL_SIGNIN_OPEN));

    const logGoogleUser = async() => {
        await signInWithGooglePopup();
    }
    
    return(
        <div className="login-section">
            <h2 className="sign-up-header">
                Join Whatever. <br/> <br/>
            </h2>
            <div className="sign-up-button-list">
                <ButtonTwo name='Google' svg={GoogleIcon} signup ='up' func={logGoogleUser}/>
                <ButtonTwo name='Facebook' svg={FacebookIcon} signup ='up'/>
                <ButtonTwo name='Email' svg={EmailIcon} signup ='up' func={toEmailSignUp}/>
            </div>
            <div className="sign-in-button-container">
                <br/><br/>Already have an account? <br/>
                <button className='sign-in-button' onClick={toSignIn}>Sign In</button>
            </div>
            {/* <div className="login-popup-footer">
                &#169; Isaac Ma 2022
            </div> */}
            <ButtonClose/>
        </div>
    )
}
export default LoginPopupSignup;