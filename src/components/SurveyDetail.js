import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types"
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';



const SurveyDetail = ({selectedSurvey, onUpdateClick, onDeleteClick}) => {
  const { name, description, options, id } = selectedSurvey
  return(
    <React.Fragment>
      <br/>
      <h2>Survey Detail</h2>
      <h3>{name}</h3>
      <p>{description}</p>
      <ListGroup>
        <li>{options[1]}</li>
        <li>{options[2]}</li>
        <li>{options[3]}</li>
        <li>{options[4]}</li>
      </ListGroup>
      <br/>
      <Button onClick={onUpdateClick}>Update</Button>
      <br/>
      <br/>
      <Button onClick={() => onDeleteClick(id)}>Delete</Button>
    </React.Fragment>
  );
}

SurveyDetail.propTypes = {
  selectedSurvey: PropTypes.object,
  onUpdateClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
}

export default SurveyDetail;