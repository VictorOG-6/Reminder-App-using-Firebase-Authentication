import React, {useEffect, useState} from "react";
import {auth} from '../../firebase'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import {Link} from 'react-router-dom'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user)
            } else{
                setAuthUser(null)
            }
        })

        return() => {
            listen()
        }

    },[])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful');
        }).catch(error => console.log(error))
    }

    return(
        <div className="auth-container">{ authUser ? <><p className="auth-p">{`Signed In as ${authUser.email}`}</p> <div className="auth-btn"><button onClick={userSignOut}>Sign Out</button></div> </> : <p>Signed Out</p> }</div>
    )
}

export default AuthDetails;