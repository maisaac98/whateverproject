import './landing-page.component.scss';
import { LoginContext } from '../../contexts/login.context';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import ButtonOne from '../button-one/button-one.component';
import LoginPopup from '../login-popup/login-popup.component';
import LandingPageNavBar from '../nav-bar/nav-bar.component';
import { useEffect } from 'react';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase.utils';

const LandingPage = () => {
    const {isPopupOpen, setIsPopupOpen, setIsSignUpOpen} = useContext(LoginContext);
    const { currentUser } = useContext(UserContext);
    const togglePopup = () => {
        setIsSignUpOpen(true);
        setIsPopupOpen(!isPopupOpen);
    }
    const navigate = useNavigate();

    useEffect(() => {
        if(currentUser) {
            navigate('/home');
        }
    })

        return(
            <div className="landingpage-container">
                 <LandingPageNavBar/>
                 <div className="main-content">
                     <div className="main-content-logo">
                         ¯\_(ツ)_/¯
                     </div>
                     <div className="main-content-title">
                         Write whatever.
                     </div>
                     <div className="button-one" onClick={togglePopup}>
                         <ButtonOne/>
                     </div>
                     {/* <button onClick={signOutUser}>sign out</button> testing function*/}
                 </div>
                 {isPopupOpen&&<LoginPopup/>}
             </div> 
         )
}

export default LandingPage;