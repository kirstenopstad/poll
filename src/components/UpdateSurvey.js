import React from "react";
import PropTypes from "prop-types"

const UpdateSurvey = ({selectedSurvey}) => {
  const { name, description } = selectedSurvey
  return(
    <React.Fragment>
      <h3>Update Survey | {name}</h3>
      <form>
        <p>eventually survey update form</p>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

UpdateSurvey.propTypes = {
  selectedSurvey: PropTypes.object
}
export default UpdateSurvey;