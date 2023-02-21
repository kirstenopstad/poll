import React from "react";
import PropTypes from 'prop-types'

const UserSurvey = ({ whenClicked, survey}) => {
  const { name, id } = survey;
  return(
    <React.Fragment>
      <h4 onClick={() => whenClicked(id)}>{name}</h4>
    </React.Fragment>
  );
}

UserSurvey.propTypes = {
  survey: PropTypes.object,
  whenClicked: PropTypes.func
}

export default UserSurvey;