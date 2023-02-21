import React from "react";
import PropTypes from "prop-types";

const TakeSurvey = ({survey}) => {
  return(
    <React.Fragment>
      <h3>{survey.name}</h3>
      <h3>{survey.description}</h3>
      <p>eventually takes user input</p>
      <form>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

TakeSurvey.propTypes = {
  selectedSurvey: PropTypes.object
}

export default TakeSurvey;