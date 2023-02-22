import React from "react";
import PropTypes from "prop-types"

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
      <h3>Create Survey Form</h3>
      <p>eventually survey create form</p>
      <form onSubmit={handleCreateSurveySubmission}>
        <input 
          type="text"
          name="name"
          placeholder="Survey Title"
        />
        <input 
          type="text"
          name="description"
          placeholder="Describe survey."
        />
        <input 
          type="text"
          name="author"
          placeholder="Your initials."
        />
        <input 
          type="text"
          name="option1"
          placeholder="Option 1"
        />
        <input 
          type="text"
          name="option2"
          placeholder="Option 2"
        />
        <input 
          type="text"
          name="option3"
          placeholder="Option 3"
        />
        <input 
          type="text"
          name="option4"
          placeholder="Option 4"
        />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

CreateSurvey.propTypes = {
  onSubmitClick: PropTypes.func,

}
export default CreateSurvey;