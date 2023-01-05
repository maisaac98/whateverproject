import { useContext } from "react";
import { LoginContext } from "../../contexts/login.context";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectPopupOpen } from "../../store/loginpopup/loginpopup.selector";
import { createAction } from "../../utils/reducer/reducers.utils";
import { LOGINPOPUP_ACTION_TYPES } from "../../store/loginpopup/loginpopup.types";

const LandingPageNavBar = () => {
    const popupState = useSelector(selectPopupOpen);
    const dispatch = useDispatch();

    const togglePopup = () => {
        dispatch(createAction(LOGINPOPUP_ACTION_TYPES.SET_SIGNIN_OPEN));
    }

    return (
        <div className="nav-bar">
                <div className="nav-bar-list">
                    <div className="nav-bar-list-selections nav-bar-about" title='Coming soon...'>About</div>
                    <div className="nav-bar-list-selections nav-bar-projects" title="Coming soon...">Projects</div>
                    <div className="nav-bar-list-selections nav-bar-sign-up"> <button onClick={togglePopup}>Sign In</button></div>
                </div>
        </div>
    )
}

export default LandingPageNavBar;