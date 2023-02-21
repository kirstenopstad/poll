import React from "react";
import Survey from "./Survey";

const Dashboard = ({surveyList}) => {
  // filter where author is KO
  const filteredList = surveyList.filter(survey => survey.author === "ko");
  return(
    <React.Fragment>
      <h3>Dashboard</h3>
      {filteredList.map(survey => 
          <Survey 
            key={survey.id}
            survey={survey}/>
      )}
    </React.Fragment>
  );
}
export default Dashboard;