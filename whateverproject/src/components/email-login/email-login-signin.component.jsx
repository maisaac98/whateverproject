import './email-login-signup.component.scss';
import ButtonClose from "../button-close/button-close.component";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createAction } from '../../utils/reducer/reducers.utils';
import { LOGINPOPUP_ACTION_TYPES } from '../../store/loginpopup/loginpopup.types';


const EmailSignIn = () => {
    const dispatch = useDispatch();
    const toSignUp = () => dispatch(createAction(LOGINPOPUP_ACTION_TYPES.SET_SIGNUP_OPEN));

    const defaultFormFields = {
        email: '',
        password: '', 
    }
    
    const [formFields, setFormFields] = useState(defaultFormFields);
        const { email, password } = formFields;

        const resetFormFields = () => {
            setFormFields(defaultFormFields);
        }
    
        const handleChange = (event) => {
            const {name, value} = event.target;
            console.log(value);
            setFormFields({...formFields, [name]:value})
        }
    
        const handleSubmit = async (event) => {
            event.preventDefault();
      
            try {
                //authenticate user with firebase
            } catch (error){
                alert('Incorrect email or password!');
                console.log(error);
            }
        }    
    return(
        <div className="login-section">
            <h2 className="sign-up-header">
                    Sign in with email. <br/> <br/>
            </h2>
            <div className="signup-form">
                <form onSubmit={handleSubmit} className='email-form-signup'>

                    <div className="form-input">
                        <label>Email</label>
                        <input type="email" required onChange={handleChange} name='email' value={email} placeholder='Email'/>
                    </div>

                    <div className="form-input">
                        <label className="labels">Password</label>
                        <input type="password" required onChange={handleChange} name='password' value={password} placeholder='Password'/>
                    </div>
                    <button type="submit" className="submit">Login</button>
                </form>
            </div>
            <div className="sign-in-button-container">
                <br/><br/> Don't have an account? <br/>
                <button className='sign-in-button' onClick={toSignUp}>Sign up</button>
            </div>
            {/* <div className="login-popup-footer">
                &#169; Isaac Ma 2022
            </div> */}
            <ButtonClose/>
        </div>
    )
    
}

export default EmailSignIn;