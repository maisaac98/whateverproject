import { useState, createContext } from "react";

export const LoginContext = createContext({
    isPopupOpen: false,
    setIsPopupOpen: () => {},
    isSignUpOpen: true,
    setIsSignUpOpen: () => {},
})

export const LoginProvider = ({children}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(true);
    const value = {isPopupOpen, setIsPopupOpen, isSignUpOpen, setIsSignUpOpen};

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}