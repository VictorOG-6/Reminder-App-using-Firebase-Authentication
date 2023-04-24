import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {FaUserAlt, FaEnvelope} from 'react-icons/fa'
import { auth } from "../../firebase"
import SignUp from "./SignUp";
import UserPage from "./UserPage";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [logger, setLogger] = useState('')
    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            setLogger(user)
            console.log(userCredential);
        }).catch((error) => {
            alert('Incorrect username or password')
            console.log(error);
        })
        setEmail('')
        setPassword('')
    }

    if(logger){
        return <UserPage></UserPage>
    }

    return(
        <>
            <div className="container">
            <SignUp></SignUp>
            <div className="form-box">
                <h1>Sign In</h1>
                <form onSubmit={signIn}>
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
                        <button type="submit">Sign In</button>
                    </div>
                </form>
            </div>
            </div>
            
            
        </>
    )
}

export default SignIn