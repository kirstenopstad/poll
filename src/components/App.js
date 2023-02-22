import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import TakeSurveyControl from './TakeSurveyControl';
import BuildSurveyControl from './BuildSurveyControl';
// import surveys from './../seedData';
import results from './../resultSeedData';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from './../firebase.js'


function App() {
// variable state
// const [surveyList, setSurveyList] = useState();
// const [error, setError] = useState(null);

  // useEffect(() => { 
  //   const unSubscribe = onSnapshot(
  //     collection(db, "surveys"), 
  //     (collectionSnapshot) => {
  //       const surveys = [];
  //       collectionSnapshot.forEach((doc) => {
  //         surveys.push({
  //           ...doc.data(),
  //           id: doc.id
  //         })
  //       })
  //       setSurveyList(surveys);
  //     }, 
  //     (error) => {
  //       setError(error.message);
  //     }
  //   );

  //   return () => unSubscribe();
  // }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/take" element={<TakeSurveyControl resultList={results}/>} />
          <Route path="/build" element={<BuildSurveyControl />} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

App.propTypes = {
  surveys: PropTypes.array
}
export default App;
