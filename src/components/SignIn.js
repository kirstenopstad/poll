import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { signInWithEmailAndPassword} from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
    <div className="signin">
      <h2>Login</h2>
      <Form onSubmit={whenSignInSubmitted}>
        {signInSuccess}
        <Form.Group className="mb-3" controlId="formBasicEmailSignIn">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordSignIn">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;