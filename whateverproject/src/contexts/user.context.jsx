import { createContext, useState, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase.utils";
import { Navigate, useNavigate } from "react-router-dom";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});


export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener((user) =>{
    //         setCurrentUser(user);
    //     });
    //     return unsubscribe;
    // },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

