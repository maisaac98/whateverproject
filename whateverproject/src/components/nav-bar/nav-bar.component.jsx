import { useContext } from "react";
import { LoginContext } from "../../contexts/login.context";

const LandingPageNavBar = () => {
    const { setIsPopupOpen, isSignUpOpen, setIsSignUpOpen } = useContext(LoginContext);
    const togglePopup = () => {
        setIsPopupOpen(true);
        setIsSignUpOpen(!isSignUpOpen);
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