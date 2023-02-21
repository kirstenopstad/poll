import React from "react";
import Dashboard from "./Dashboard";
import SurveyDetail from "./SurveyDetail";
import UpdateSurvey from "./UpdateSurvey";
import CreateSurvey from "./CreateSurvey";
import PropTypes from "prop-types"


const BuildSurveyControl = ({surveyList}) => {
  return(
    <React.Fragment>
      <h1>BuildSurveyControl</h1>
      <Dashboard surveyList={surveyList}/>
      <SurveyDetail />
      <UpdateSurvey />
      <CreateSurvey />
    </React.Fragment>
  );
}

BuildSurveyControl.propTypes = {
  surveyList: PropTypes.array
}

export default BuildSurveyControl;