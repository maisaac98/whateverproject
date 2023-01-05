import './login-popup.component.scss';
import { LoginContext } from '../../contexts/login.context';
import LoginPopupSignup from './login-popup-signup.component';
import LoginPopupSignIn from './login-popup-signin.component';
import EmailSignIn from '../email-login/email-login-signin.component';
import EmailSignup from '../email-login/email-login-signup.component';
import { selectEmailSignUpPopup, selectSigninPopup, selectSignupPopup, selectEmailSignInPopup } from '../../store/loginpopup/loginpopup.selector';
import { useDispatch, useSelector } from 'react-redux';
import { setSignupOpen } from '../../store/loginpopup/loginpopup.action';


const LoginPopup = () => {
    const dispatch = useDispatch();
    // const { isSignUpOpen, setIsSignUpOpen } = useContext(LoginContext);
    // const switcher = dispatch(setSignupOpen());
    const isSignUpOpen = useSelector(selectSignupPopup);
    const isSignInOpen = useSelector(selectSigninPopup);
    const isEmailSignupOpen = useSelector(selectEmailSignUpPopup);
    const isEmailSigninOpen = useSelector(selectEmailSignInPopup);

    return (
        <div className="login-popup-container">
            <div className="login-popup">
                {isSignUpOpen&&<LoginPopupSignup/>}
                {isSignInOpen&&<LoginPopupSignIn/>}
                {isEmailSigninOpen&&<EmailSignIn/>}
                {isEmailSignupOpen&&<EmailSignup/>}
            </div>
        </div>
    )
}

export default LoginPopup;