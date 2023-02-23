import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <div className="register">
      <br />
      <h2>Register</h2>
      <Form onSubmit={registerUser}>
        {signUpSuccess}
        <Form.Group className="mb-3" controlId="formBasicEmailReg">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordReg">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

    </div>
   
      
      );
    }
    
export default Register;