import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

const TakeSurvey = ({survey, onSurveySubmit}) => {
  const { name, description, id, options } = survey;
  
  const handleSurveySubmission = (e) => {
    e.preventDefault();
    onSurveySubmit({
      questionId: id, 
      answer: e.target.answer.value,
    })
    }

  return(
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{description}</h3>
      <form onSubmit={handleSurveySubmission}>
        {Object.values(options).map((option, index) => 
          <div key={index}>
            <input type="radio" name="answer" id={option} value={Object.keys(options)[index]} />
            <label>{option}</label>
          </div>
          )}
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

TakeSurvey.propTypes = {
  selectedSurvey: PropTypes.object
}

export default TakeSurvey;