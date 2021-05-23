import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-up.styles.scss'

function SignUp({signUpStart}) {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const {displayName, email, password, confirmPassword} = userCredentials
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        if(password !== confirmPassword) {
            alert('passwords do not match')
            return;
        }
        signUpStart({email, password, displayName})
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return (
        <div className="sign-up">
            <h2> I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName}
                    handleChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />

                <div className="buttons">
                    <CustomButton type="submit">
                        Sign Up
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)