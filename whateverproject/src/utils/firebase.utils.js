import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';


const firebaseConfig = {

    apiKey: "AIzaSyDYGTNlBJ1NyvzHoCjYnnEXAdZMkssGD9Q",
  
    authDomain: "whatever-b3ef5.firebaseapp.com",
  
    projectId: "whatever-b3ef5",
  
    storageBucket: "whatever-b3ef5.appspot.com",
  
    messagingSenderId: "384132312306",
  
    appId: "1:384132312306:web:42a941c2bec0421d11346b"
  
  };
  
    
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback); //a permanently open listener for auth state changes 
}


export const signOutUser = async () => {
  await signOut(auth);
  console.log('signed out');
}
