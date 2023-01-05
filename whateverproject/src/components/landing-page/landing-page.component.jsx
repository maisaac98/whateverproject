import './landing-page.component.scss';
import { LoginContext } from '../../contexts/login.context';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ButtonOne from '../button-one/button-one.component';
import LoginPopup from '../login-popup/login-popup.component';
import LandingPageNavBar from '../landing-page-nav/landing-page-nav';

import { useEffect } from 'react';
import { signOutUser } from '../../utils/firebase.utils';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectPopupOpen } from '../../store/loginpopup/loginpopup.selector';
import { LOGINPOPUP_ACTION_TYPES } from '../../store/loginpopup/loginpopup.types';
import { createAction } from '../../utils/reducer/reducers.utils';
import { USER_ACTION_TYPES } from '../../store/user/user.types';

const LandingPage = () => {
    const currentUser = useSelector(selectCurrentUser);
    const popupState = useSelector(selectPopupOpen);
    const dispatch = useDispatch();

    const togglePopup = () => {
        dispatch(createAction(LOGINPOPUP_ACTION_TYPES.SET_SIGNUP_OPEN));
        dispatch(createAction(LOGINPOPUP_ACTION_TYPES.SET_POPUP_OPEN));
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
                 </div>
                 {popupState&&<LoginPopup/>}
             </div> 
         )
}

export default LandingPage;