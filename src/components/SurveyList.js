import React from "react";
import Survey from "./Survey";
import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const SurveyList = ({onSurveySelect, surveyList}) => {

  return(
    <React.Fragment>
      <ListGroup as="ul">
      {surveyList.map(survey => 
        <ListGroup.Item as="li">
          <Survey 
            key={survey.id}
            whenSelected={onSurveySelect}
            survey={survey}/>
        </ListGroup.Item>
            )}
      </ListGroup>
    </React.Fragment>
  );
}

SurveyList.propTypes = {
  surveyList: PropTypes.array,
  onSurveySelect: PropTypes.func
}
export default SurveyList;