import './App.css';
import RandomPage from './components/RandomPage';
import RepoPage from './components/RepoPage';

function App() {
  return (
    <div className="App">
    <h1>Want to see other people's projects? Enter a Github username and Voila!</h1>
    <RepoPage />

    </div>
  );
}

export default App;
