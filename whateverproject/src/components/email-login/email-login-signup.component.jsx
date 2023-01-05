import './email-login-signup.component.scss';
import ButtonClose from "../button-close/button-close.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createAction } from '../../utils/reducer/reducers.utils';
import { LOGINPOPUP_ACTION_TYPES } from '../../store/loginpopup/loginpopup.types';


const EmailSignup = () => {
    const dispatch = useDispatch();
    const toSignIn = () => dispatch(createAction(LOGINPOPUP_ACTION_TYPES.SET_SIGNIN_OPEN));

    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '', 
        confirmPassword: '',
    }
    
    const [formFields, setFormFields] = useState(defaultFormFields);
        const {displayName, email, password, confirmPassword} = formFields;

        const resetFormFields = () => {
            setFormFields(defaultFormFields);
        }
    
        const handleChange = (event) => {
            const {name, value} = event.target;
            console.log(value);
            setFormFields({...formFields, [name]:value})
        }
    
        const handleSubmit = async (event) => {
            //switch to redux thunk -> loading on sign up form while async
            event.preventDefault();
            
            if (password != confirmPassword) {
                alert("passwords do not match");
                return;
            }
    
            try {
                const {user} = await createAuthUserWithEmailAndPassword(email, password);
                await createUserDocumentFromAuth(user, {displayName});
                resetFormFields();
            } catch (error){
                if(error = 'auth/email-already-in-use') {
                    alert('Email already in use!');
                } else{
                    console.log(error);
                }
            }
        }    
    return(
        <div className="login-section">
            <h2 className="sign-up-header">
                    Sign up with email. <br/> <br/>
            </h2>
            <div className="signup-form">
                <form onSubmit={handleSubmit} className='email-form-signup'>
                    <div className="form-input">
                        <label>Display Name</label>
                        <input type="text" required onChange={handleChange} name='displayName' value={displayName} placeholder="Display Name" autoComplete="off"/>
                    </div>

                    <div className="form-input">
                        <label>Email</label>
                        <input type="email" required onChange={handleChange} name='email' value={email} placeholder='Email'/>
                    </div>

                    <div className="form-input">
                        <label className="labels">Password</label>
                        <input type="password" required onChange={handleChange} name='password' value={password} placeholder='Password'/>
                    </div>
                    
                    <div className="form-input">
                        <label>Confirm Password</label>
                        <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} placeholder='Confirm Password'/>
                    </div>
                    <button type="submit" className="submit">Create Account</button>
                </form>
            </div>
            <div className="sign-in-button-container">
                <br/><br/>Already have an account? <br/>
                <button className='sign-in-button' onClick={toSignIn}>Sign In</button>
            </div>
            {/* <div className="login-popup-footer">
                &#169; Isaac Ma 2022
            </div> */}
            <ButtonClose/>
        </div>
    )
    
}

export default EmailSignup;