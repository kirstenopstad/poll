import React from "react";
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CreateSurvey = ({ onSubmitClick }) => {
  const handleCreateSurveySubmission = (e) => {
    e.preventDefault();
    onSubmitClick({
      name: e.target.name.value, 
      description: e.target.description.value,
      author: e.target.author.value,
      options: {
        1: e.target.option1.value,
        2: e.target.option2.value,
        3: e.target.option3.value,
        4: e.target.option4.value
      }
    })
  }
  return(
    <React.Fragment>
      <br/>
      <h3>Create New Survey</h3>
      <p>Fill out all fields and submit to create a new survey.</p>
      <Form onSubmit={handleCreateSurveySubmission}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Survey Title</Form.Label>
          <Form.Control 
            type="text"
            name="name"
            placeholder="Survey Title"
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            type="text"
            name="description"
            placeholder="Describe survey"
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="author">
          <Form.Label>Author Initials</Form.Label>
          <Form.Control 
            type="text"
            name="author"
            placeholder="Your initials"
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="option1">
          <Form.Label>Option 1</Form.Label>
          <Form.Control 
            type="text"
            name="option1"
            placeholder="Option 1"
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="option2">
          <Form.Label>Option 2</Form.Label>
          <Form.Control 
            type="text"
            name="option2"
            placeholder="Option 2"
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="option3">
          <Form.Label>Option 3</Form.Label>
          <Form.Control 
            type="text"
            name="option3"
            placeholder="Option 3"
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="option4">
          <Form.Label>Option 4</Form.Label>
          <Form.Control 
            type="text"
            name="option4"
            placeholder="Option 4"
          />

        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </React.Fragment>
  );
}

CreateSurvey.propTypes = {
  onSubmitClick: PropTypes.func,

}
export default CreateSurvey;