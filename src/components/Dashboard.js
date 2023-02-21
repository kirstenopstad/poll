import React from "react";
import UserSurvey from "./UserSurvey";
import PropTypes from "prop-types"

const Dashboard = ({surveyList, onSurveySelect}) => {
  // filter where author is KO
  const filteredList = surveyList.filter(survey => survey.author === "ko");
  return(
    <React.Fragment>
      <h3>Dashboard</h3>
      {filteredList.map(survey => 
          <UserSurvey 
            key={survey.id}
            whenClicked={onSurveySelect}
            survey={survey}/>
      )}
    </React.Fragment>
  );
}
Dashboard.propTypes = {
  surveyList: PropTypes.array,
  onSurveySelect: PropTypes.func
}

export default Dashboard;