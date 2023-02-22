import React, { useState } from "react";
import Dashboard from "./Dashboard";
import SurveyDetail from "./SurveyDetail";
import UpdateSurvey from "./UpdateSurvey";
import CreateSurvey from "./CreateSurvey";
import PropTypes from "prop-types";
import { db } from './../firebase'
import { collection, addDoc, doc } from "firebase/firestore";

const BuildSurveyControl = ({surveyList, resultList}) => {
  // variable state
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [isEditing, setEditingStatus] = useState(false);
  const [isCreating, setCreatingStatus] = useState(false);

  // pass in seedData
  const [allSurveys, setAllSurveys] = useState(surveyList);

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
  const handleUpdateSurvey = ( editedSurvey ) => {
    const editedList = allSurveys
      .filter(survey => survey.id === editedSurvey.id)
      .concat(editedSurvey);
    setAllSurveys(editedList);
    setSelectedSurvey(editedSurvey);
    setEditingStatus(false);
  }

  // DELETE
  const handleDeleteSurvey = (id) => {
    const newSurveyList = allSurveys
      .filter(survey => survey.id != id);
    setAllSurveys(newSurveyList);
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
        surveyList={allSurveys} 
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