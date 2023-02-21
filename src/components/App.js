
import './App.css';
import Header from './Header';
import TakeSurveyControl from './TakeSurveyControl';
import BuildSurveyControl from './BuildSurveyControl';
import surveys from './../seedData';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/take" element={<TakeSurveyControl surveyList={surveys}/>} />
          <Route path="/build" element={<BuildSurveyControl surveyList={surveys}/>} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

App.propTypes = {
  surveys: PropTypes.array
}
export default App;
