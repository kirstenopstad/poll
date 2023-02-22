import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import SurveyDetail from "./SurveyDetail";
import UpdateSurvey from "./UpdateSurvey";
import CreateSurvey from "./CreateSurvey";
import PropTypes from "prop-types";
import { db } from './../firebase'
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc } from "firebase/firestore";

const BuildSurveyControl = ({}) => {
  // variable state
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [isEditing, setEditingStatus] = useState(false);
  const [isCreating, setCreatingStatus] = useState(false);
  const [resultList, setResultList] = useState([]);
  const [surveyList, setSurveyList] = useState([]);
  const [error, setError] = useState(null);

  // GET surveyList from db
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
  const handleDetailSelection = (id) => {
    const selected = surveyList.filter(survey => survey.id === id)[0];
    setSelectedSurvey(selected);
  }
  
  const handleDisplayUpdateForm = () => {
    setEditingStatus(true);
  }
  
  const handleDisplayCreateForm = () => {
    setCreatingStatus(true);
  }

  // CREATE
  const handleCreateForm = async (newSurvey) => {
    const surveyCollectionRef = collection(db, "surveys");
    await addDoc(surveyCollectionRef, newSurvey);
    setCreatingStatus(false);
  }

  // UPDATE
  // because we have to go to the db, it's async
  const handleUpdateSurvey = async ( editedSurvey ) => {
    // get survey to edit from db
    const refSurvey = doc(db, "surveys", editedSurvey.id);
    // update ref
    await updateDoc(refSurvey, editedSurvey);
    setSelectedSurvey(editedSurvey);
    setEditingStatus(false);
  }

  // DELETE
  const handleDeleteSurvey = async (id) => {
    // get survey to delete
    const refSurvey = doc(db, "surveys", id)
    // delete doc
    await deleteDoc(refSurvey)
    
    setSelectedSurvey(null);
  }

  // conditional rendering
  let detail = null;

  if (isCreating) {
    detail = <CreateSurvey onSubmitClick={handleCreateForm}/>
  } else if (isEditing) {
    detail = <UpdateSurvey selectedSurvey={selectedSurvey} onSubmitUpdate={handleUpdateSurvey}/>
  } else if (selectedSurvey) {
    detail = <SurveyDetail 
      selectedSurvey={selectedSurvey} 
      onUpdateClick={handleDisplayUpdateForm}
      onDeleteClick={handleDeleteSurvey}/>
  }

  return(
    <React.Fragment>
      <h1>BuildSurveyControl</h1>
      <Dashboard 
        surveyList={surveyList} 
        resultList={resultList} 
        onSurveySelect={handleDetailSelection} 
        onCreateClick={handleDisplayCreateForm} />
      {detail}
    </React.Fragment>
  );
}

BuildSurveyControl.propTypes = {
  surveyList: PropTypes.array
}

export default BuildSurveyControl;