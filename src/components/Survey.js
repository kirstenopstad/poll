import React from "react";
import PropTypes from 'prop-types'

const Survey = ({ whenSelected, survey}) => {
  const { name, id } = survey;
  return(
    <React.Fragment>
      <h4 onClick={() => whenSelected(id)}>{name}</h4>
    </React.Fragment>
  );
}

Survey.propTypes = {
  survey: PropTypes.object
}

export default Survey;