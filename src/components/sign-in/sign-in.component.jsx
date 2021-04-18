import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
        }
    }

    handleChange = event =>  {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: "", password: "" });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your emailo and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange}
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        required
                        label='Email'>
                    </FormInput>
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange}
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
}

export default SignIn;