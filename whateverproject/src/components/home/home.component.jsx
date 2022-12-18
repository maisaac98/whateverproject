import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    const {currentUser} = useContext(UserContext);
    const navigate = useNavigate();
    const signOut = async() => {
        await signOutUser();
        navigate('/login');
    }

       return (
        <div className="home-container">
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