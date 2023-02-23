import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
      <br />
      <h4>{name}</h4>
      <p>{description}</p>
      <Form onSubmit={handleSurveySubmission}>
        {Object.values(options).map((option, index) => 
          <div key={`${option}-radio`} className="mb-3" >
            <Form.Check 
              type="radio"
              id={option}
              label={option}
              value={Object.keys(options)[index]}
              name="answer"
            />
          </div>
          )}
        <Button type="submit" variant="success">Submit</Button>
      </Form>
    </React.Fragment>
  );
}

TakeSurvey.propTypes = {
  selectedSurvey: PropTypes.object
}

export default TakeSurvey;