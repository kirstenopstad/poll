import React, { useState } from "react";
import PropTypes from 'prop-types'


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
      <h4 onClick={() => whenClicked(id)}>{name}</h4>
      <h5>Results</h5>
      {optionValues.map((entry, index) => 
        <li key={index}>{entry}: {tallies[index]} votes</li>
      )}
    </React.Fragment>
  );
}

UserSurvey.propTypes = {
  survey: PropTypes.object,
  results: PropTypes.array,
  whenClicked: PropTypes.func
}

export default UserSurvey;