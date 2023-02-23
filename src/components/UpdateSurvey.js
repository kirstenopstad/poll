import React from "react";
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UpdateSurvey = ({selectedSurvey, onSubmitUpdate}) => {
  const { id, name, description, author, options } = selectedSurvey

  const handleUpdateSurveySubmission = (e) => {
    e.preventDefault();

    // validate inputs

    onSubmitUpdate({
      // if there's a user-inputted value, use it, else use original value
      name: (e.target.name.value) ? (e.target.name.value) : name, 
      description: (e.target.description.value) ? e.target.description.value : description,
      author: (e.target.author.value) ? e.target.description.value : author,
      options: {
        1: (e.target.option1.value) ? e.target.option1.value : options[1],
        2: (e.target.option2.value) ? e.target.option2.value : options[2],
        3: (e.target.option3.value) ? e.target.option3.value : options[3],
        4: (e.target.option4.value) ? e.target.option4.value : options[4]
      },
      id: id
    })
  }

  return(
    <React.Fragment>
      <br />
      <h3>Update Survey | {name}</h3>
      <Form onSubmit={handleUpdateSurveySubmission}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Survey Title</Form.Label>
          <Form.Control 
            type="text"
            name="name"
            placeholder={name}
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            type="text"
            name="description"
            placeholder={description}
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="author">
          <Form.Label>Author Initials</Form.Label>
          <Form.Control 
            type="text"
            name="author"
            placeholder={author}
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="option1">
          <Form.Label>Option 1</Form.Label>
          <Form.Control 
            type="text"
            name="option1"
            placeholder={options[1]}
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="option2">
          <Form.Label>Option 2</Form.Label>
          <Form.Control 
            type="text"
            name="option2"
            placeholder={options[2]}
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="option3">
          <Form.Label>Option 3</Form.Label>
          <Form.Control 
            type="text"
            name="option3"
            placeholder={options[3]}
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="option4">
          <Form.Label>Option 4</Form.Label>
          <Form.Control 
            type="text"
            name="option4"
            placeholder={options[4]}
          />

        </Form.Group>
        <Button type="submit">Save Changes</Button>
      </Form>
    </React.Fragment>
  );
}

UpdateSurvey.propTypes = {
  selectedSurvey: PropTypes.object,
  onSubmitUpdate: PropTypes.func
}
export default UpdateSurvey;