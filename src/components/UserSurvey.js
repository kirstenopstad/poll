import React, { useState } from "react";
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const UserSurvey = ({ whenClicked, survey, results}) => {
  // const [surveyResults, setSurveyResults] = useState(results);

  const { name, options, id } = survey;

  
  // filtered results containt only results pertaining to this survey
  const filteredResults = results.filter(result => result.questionId === id);

  
  // init empty results array
  let tallies = [];
  
  // for each option key (1, 2, 3, 4), calculate how answer tally
  let optionKeys = Object.keys(options);
  let optionValues = Object.values(options);


  Object.entries(options).forEach((entry, index) => {
    // get answer id
    let answerId = optionKeys[index];
    // filter results where answer is equal to key
    let tally = filteredResults.filter(a => a.answer === answerId).length
    tallies.push(tally)
  })

  return(
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          <h4 >{name}</h4>
        </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
          <h5>Current Results</h5>
          {optionValues.map((entry, index) => 
            <li key={index}>{entry}: {tallies[index]} votes</li>
          )}
        </Card.Text>
        <Button onClick={() => whenClicked(id)} variant="secondary">Details</Button>
      </Card.Body>
    </Card>

    </React.Fragment>
  );
}

UserSurvey.propTypes = {
  survey: PropTypes.object,
  results: PropTypes.array,
  whenClicked: PropTypes.func
}

export default UserSurvey;