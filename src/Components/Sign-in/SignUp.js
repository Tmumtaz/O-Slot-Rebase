
import "./SignIn.scss";
import { useState } from "react";
import {auth, googleProvider} from '../../firebaseUtils'
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";



const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignUp = (event) => {
        event.preventDefault();
        // form validations 
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials)

            // Clear form fields
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return(
        <>
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button>Sign Up</button>
                <button>Sign Up with Google </button>
            </form>
        </div>
        </>
    )
}

export default SignUp;