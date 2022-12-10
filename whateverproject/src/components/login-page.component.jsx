import './login-page.component.scss';

const LoginPage = () => {
    return(
        <div className="login-container">
            <div className="nav-bar-outer">
                <div className="nav-bar-inner">
                    <div className="nav-bar-logo">
                        <span className="nav-bar-logo-figure">
                            ¯\_(ツ)_/¯
                        </span> 
                    </div>
                    <div className="nav-bar-list">
                        <div className="nav-bar-list-selections">About</div>
                        <div className="nav-bar-list-selections">My Story</div>
                        <div className="nav-bar-list-selections">Projects</div>
                        <div className="nav-bar-list-selections sign-up">Sign Up</div>
                    </div>
                </div>
            </div>
            <div className="content-main">
                <div className="content-main-header">
                    <h1 className='main-header'>Write whatever.</h1>
                    <h3 className='header-description'>Choose to share anonymously. 
                    <br/> You'll receive anonymously.</h3>
                    <button>Get started</button>
                </div>
                <div className="content-main-figure">
                    <img src={require("../assets/textbox.png")} alt="textbox" />
                </div>
                
            </div>
            <div className="content-secondary">

            </div>
        </div>
        
    )
}

export default LoginPage;