import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  // state variable
  const [signUpSuccess, setSignUpSuccess] = useState(null);

  // functions
  const registerUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
    })
    .catch((error) => {
      setSignUpSuccess(`There was an error signing up: ${error.message}!`)
    })
  }
  
  return(
    // TODO: add password double entry confirmation
    <form onSubmit={registerUser}>
      {signUpSuccess}
      <input
          type='text'
          name='email'
          placeholder='Email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
      <button type="submit">Register</button>
    </form>
      
      );
    }
    
export default Register;