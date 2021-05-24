import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

import './sign-up.styles.scss';

const SignUp = () => {

    const [ userSignupData, setUserSignupData ] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = userSignupData;

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            setUserSignupData({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        }catch(err) {
            console.log(err);
        }
    }

    const handleChange = event => {
        const {name, value} = event.target;

        setUserSignupData({ ...userSignupData, [name]: value });
    }

    const { displayName, email, password, confirmPassword } = userSignupData;

    return(
        <div className='sign-up'>
            <h2 className='title'>
                I do not have account
            </h2>
            <span>Sign up with you email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required>
                </FormInput>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required>
                </FormInput>
                <FormInput
                    type='text'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required>
                </FormInput>
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required>
                </FormInput>

                <CustomButton type='submit' >Sign Up</CustomButton>
            </form>
        </div>
    );
}

export default SignUp;