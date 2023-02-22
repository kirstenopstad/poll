import React from "react";
import UserSurvey from "./UserSurvey";
import PropTypes from "prop-types";
// import resultSeedData from "../resultSeedData";

const Dashboard = ({surveyList, resultList, onSurveySelect, onCreateClick}) => {
  // filter where author is KO
  // TODO: refactor to filter by user
  // const filteredList = surveyList.filter(survey => survey.author === "ko");
  
  return(
    <React.Fragment>
      <h3>Dashboard</h3>
      {/* TODO: make this filtered by user */}
      {surveyList.map(survey => 
          <UserSurvey 
            key={survey.id}
            whenClicked={onSurveySelect}
            survey={survey}
            results={resultList}/>
      )}
      <button onClick={onCreateClick}>Create Survey</button>
    </React.Fragment>
  );
}
Dashboard.propTypes = {
  surveyList: PropTypes.array,
  onSurveySelect: PropTypes.func,
  onCreateClick: PropTypes.func
}

export default Dashboard;