
import './App.css';
import Header from './Header';
import TakeSurveyControl from './TakeSurveyControl';
import BuildSurveyControl from './BuildSurveyControl';
import surveys from './../seedData';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <Header />
      <TakeSurveyControl surveyList={surveys}/>
      <BuildSurveyControl surveyList={surveys}/>
    </div>
  );
}

App.propTypes = {
  surveys: PropTypes.array
}
export default App;
