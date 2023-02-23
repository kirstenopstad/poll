import React from "react";
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';

const Survey = ({ whenSelected, survey}) => {
  const { name, id } = survey;
  return(
    <React.Fragment>
      <Button onClick={() => whenSelected(id)}>{name}</Button>
    </React.Fragment>
  );
}

Survey.propTypes = {
  survey: PropTypes.object
}

export default Survey;