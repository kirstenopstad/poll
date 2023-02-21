import React from "react";
import PropTypes from "prop-types"

const CreateSurvey = ({ onSubmitClick }) => {
  return(
    <React.Fragment>
      <h3>Create Survey Form</h3>
      <p>eventually survey create form</p>
      <form onSubmit={onSubmitClick}>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

CreateSurvey.propTypes = {
  onSubmitClick: PropTypes.func,
}
export default CreateSurvey;