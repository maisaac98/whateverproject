import './App.css';
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/landing-page/landing-page.component';
import Home from './components/home/home.component';
import { useEffect } from "react";
import { useDispatch, useStore } from 'react-redux'; //binding hook that allows us to interact with redux store
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase.utils";

import { setCurrentUser } from './store/user/user.action'

function App() {

  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {

    const unsubscribe = onAuthStateChangedListener((user) =>{
        dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  },[])

  return (
    <Routes>
      <Route path='/login' element={<LandingPage/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
  );
}

export default App;
