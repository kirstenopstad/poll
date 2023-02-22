import React from "react";
import SurveyList from "./SurveyList";
import TakeSurvey from "./TakeSurvey";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { db } from './../firebase'
import { collection, addDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";

// TODO: Add functionality to store results
// Seed result data

const TakeSurveyControl = () => {
  // slices of state
  const [takingSurvey, setTakingSurvey] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [resultList, setResultList] = useState([]);
  const [surveyList, setSurveyList] = useState([]);
  const [error, setError] = useState(null);

  // use effects

  // GET SurveyList from db, update whenever it changes
  useEffect(() => { 
    const unSubscribe = onSnapshot(
      collection(db, "surveys"), 
      (collectionSnapshot) => {
        const surveys = [];
        collectionSnapshot.forEach((doc) => {
          surveys.push({
            ...doc.data(),
            id: doc.id
          })
        })
        setSurveyList(surveys);
      }, 
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);
  
  // GET ResultList from db, update whenever it changes
  useEffect(() => { 
    const unSubscribe = onSnapshot(
      collection(db, "results"), 
      (collectionSnapshot) => {
        const results = [];
        collectionSnapshot.forEach((doc) => {
          results.push({
            ...doc.data(),
            id: doc.id
          })
        })
        setResultList(results);
      }, 
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  // functions
  const handleSelect = (id) => {
    const selected = surveyList.filter(survey => survey.id === id)[0]
    setSelectedSurvey(selected);
    setTakingSurvey(true);
  }

  // Add functionality to record survey result
  const handleRecordResult = async (result) => {
    const resultCollectionRef = collection(db, "results");
    await addDoc(resultCollectionRef, result)
  }

  let surveyBeingTaken = null;

  // if takingSurvey is true, survey for user to take
  if (takingSurvey) {
    surveyBeingTaken = <TakeSurvey survey={selectedSurvey} onSurveySubmit={handleRecordResult}/>
  }
  return(
    <React.Fragment>
      <h1>TakeSurveyControl</h1>
      <SurveyList surveyList={surveyList} onSurveySelect={handleSelect}/>
      {surveyBeingTaken}
    </React.Fragment>
  );
}

// TakeSurveyControl.propTypes = {
// }

export default TakeSurveyControl;