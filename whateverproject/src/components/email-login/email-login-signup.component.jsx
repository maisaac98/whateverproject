

const EmailSignup = () => {
    <div className="login-section">
        <h2 className="sign-up-header">
                Join Whatever. <br/> <br/>
        </h2>
        <div className="signup-form">
            
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
}