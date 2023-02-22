import React from "react";
import PropTypes from "prop-types"

const UpdateSurvey = ({selectedSurvey, onSubmitUpdate}) => {
  const { id, name, description, author, options } = selectedSurvey

  const handleUpdateSurveySubmission = (e) => {
    e.preventDefault();

    // validate inputs

    onSubmitUpdate({
      // if there's a user-inputted value, use it, else use original value
      name: (e.target.name.value) ? (e.target.name.value) : name, 
      description: (e.target.description.value) ? e.target.description.value : description,
      author: (e.target.author.value) ? e.target.description.value : {description},
      options: {
        1: (e.target.option1.value) ? e.target.option1.value : options[1],
        2: (e.target.option2.value) ? e.target.option2.value : options[2],
        3: (e.target.option3.value) ? e.target.option3.value : options[3],
        4: (e.target.option4.value) ? e.target.option4.value : options[4]
      }
    })
  }

  return(
    <React.Fragment>
      <h3>Update Survey | {name}</h3>
      <form onSubmit={handleUpdateSurveySubmission}>
        <input 
          type="text"
          name="name"
          placeholder={name}
        />
        <input 
          type="text"
          name="description"
          placeholder={description}
        />
        <input 
          type="text"
          name="author"
          placeholder={author}
        />
        <input 
          type="text"
          name="option1"
          placeholder={options[1]}
        />
        <input 
          type="text"
          name="option2"
          placeholder={options[2]}
        />
        <input 
          type="text"
          name="option3"
          placeholder={options[3]}
        />
        <input 
          type="text"
          name="option4"
          placeholder={options[4]}
        />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

UpdateSurvey.propTypes = {
  selectedSurvey: PropTypes.object,
  onSubmitUpdate: PropTypes.func
}
export default UpdateSurvey;