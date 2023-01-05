import { useContext } from "react";
import { signOutUser } from "../../utils/firebase.utils";
import { Navigate, useNavigate } from "react-router-dom";
import ContentBox from "../content-boxes/content-boxes-component";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import './home.component.scss';

const Home = () => {
    const currentUser = useSelector(selectCurrentUser);
    const navigate = useNavigate();
    const signOut = async() => {
        await signOutUser();
        navigate('/login');
    }
       return (
        <div className="container-a">
            <div className="container-a-1">
                <div className="container-b">
                    <div className="nav-side">
                        <img src={require ("../../assets/whatever-icon.png")} alt="icon" className="whatever-icon" />
                        <div className="nav-side-container">
                            <ul>
                                <li className="nav-side-items">Home</li>
                                <li className="nav-side-items">Saved</li>
                                <li className="nav-side-items">Prompt</li>
                                <li className="nav-side-items">Logout</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="content-side">
                        <div className="content-side-1">
                            <div className="content-header">
                                <h2 className="current-user-name">{currentUser.displayName}</h2>
                                <div className="content-nav-bar">
                                    Home
                                </div>
                            </div>
                            <div className="content-main">
                                <ContentBox/>
                                <ContentBox/>
                                <ContentBox/>
                                <ContentBox/>
                                <ContentBox/>
                            </div>
                        </div>
                    </div>
                    <div className="profile-side">
                        <div className="profile-content">
                            {currentUser.displayName}
                        </div>
                    </div>
                </div>
            </div>




            <button className="logout" onClick={signOut}>
                Logout for {currentUser.displayName};
            </button>
        </div>
        ) 
    // }else{
    //     console.log('returning to home');
    //     // return <Navigate replace to="/"/>;
    // }
    
    
}

export default Home;