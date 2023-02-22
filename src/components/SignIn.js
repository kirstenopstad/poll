import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { signInWithEmailAndPassword} from "firebase/auth";


const SignIn = () => {
  // state variables
  const [signInSuccess, setSignInSuccess] = useState(null);

  const whenSignInSubmitted = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`)
      });
  }

  return(
    <form onSubmit={whenSignInSubmitted}>
      {signInSuccess}
      <input 
        type='text'
        name='email'
        placeholder='Email'
      />
      <input 
        type='password'
        name='password'
        placeholder='Password'
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default SignIn;