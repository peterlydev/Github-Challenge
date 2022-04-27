import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import RepoPage from './components/RepoPage';


function App() {
  return (
    <Router>
    <div className="App">
    <h1>Want to see other people's projects? Enter a Github username and Voila!</h1>
      <RepoPage />   
    </div>
    </Router>
  );
}

export default App;
