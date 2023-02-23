import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import TakeSurveyControl from './TakeSurveyControl';
import BuildSurveyControl from './BuildSurveyControl';
import SignInControl from './SignInControl';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./../firebase.js";
import { signOut } from "firebase/auth";
import Container from 'react-bootstrap/Container';

function App() {
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setSignOutSuccess("You have successfully logged out!");
      })
      .catch((error) => {
        setSignOutSuccess(`There was an error signing out: ${error.message}`)
      })
  }

  // TODO: pass signOutSuccess msg as props to SignIn

  return (
    <Router>
      <Container>
        <div className="App">
          <Header onSignOut={handleSignOut}/>
          <Routes>
            <Route path="/take" element={<TakeSurveyControl/>} />
            <Route path="/build" element={<BuildSurveyControl />}/>
            <Route path="/login" element={<SignInControl />}/>
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

App.propTypes = {
  surveys: PropTypes.array
}
export default App;
