import { useState, createContext } from "react";

export const LoginContext = createContext({
    isPopupOpen: false,
    setIsPopupOpen: () => {},
    isSignUpOpen: true,
    setIsSignUpOpen: () => {},
    isEmailSignUpOpen: true,
    setEmailIsSignUpOpen: () => {},
})

export const LoginProvider = ({children}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(true);
    const [isEmailSignUpOpen, setIsEmailSignUpOpen] = useState(false);
    const value = {isPopupOpen, setIsPopupOpen, isSignUpOpen, setIsSignUpOpen, isEmailSignUpOpen, setIsEmailSignUpOpen};

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}