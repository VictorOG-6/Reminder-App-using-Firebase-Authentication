import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {FaUserAlt, FaEnvelope} from 'react-icons/fa'
import { auth } from "../../firebase"

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            if(userCredential){
                alert('Account created Successfully')
            }
            console.log(userCredential);
        }).catch((error) => {
            alert('Incorrect username or password')
            console.log(error);
        })
        setEmail('')
        setPassword('')
    }

    return(
        <>
            <div className="form-box">
                <h1>Sign Up</h1>
                <form onSubmit={signUp}>
                    <div className="input-group">
                        <div className="input-field">
                            <i><FaEnvelope/></i>
                            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="input-field">
                            <i><FaUserAlt/></i>
                            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="btn-field">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp