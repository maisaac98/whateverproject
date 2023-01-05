import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  //returns a reference to the doc, if it doesn't exist bc of uid is unique firebase will create a path

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef,{
        displayName, 
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userDocRef;
}

export const signOutUser = async () => {
  await signOut(auth);
  console.log('signed out');
}
