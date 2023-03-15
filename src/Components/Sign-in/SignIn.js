import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";
import "./SignIn.scss";
import { useState } from "react";
import {auth} from '../../firebaseUtils'
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUp from "./SignUp";
import AuthDetails from "./AuthDetails";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials) => {
        console.log(userCredentials)
    }).catch((error) => {
        console.log(error)
    })

  }
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-secondary"
        imageName={require("../../Assets/signUp.jpg")}
      />

      <div className="formContainer">
        <h1>Sign in</h1>
        <form onSubmit={signInHandler}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>

        <SignUp />
        <AuthDetails />
      </div>

    
    </>
  );
};

export default SignIn;
