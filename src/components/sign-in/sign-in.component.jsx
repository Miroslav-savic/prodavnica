import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.styles.scss';

const SignIn = () => {

    const [ userCredentials, setUserCredentials ] = useState({
        email: "",
        password: "",
    });

    const handleChange = event =>  {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    }

    const { email, password  } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({ email: "", password: "" });
        }
        catch(err) {
            console.log(err);
        }
    }

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your emailo and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        handleChange={handleChange}
                        name='email' 
                        type='email' 
                        value={email} 
                        required
                        label='Email'>
                    </FormInput>
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password} 
                        required
                        handleChange={handleChange}
                        label='Password'>
                    </FormInput>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }

export default SignIn;