import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import RepoPage from './components/RepoPage';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
    <div className="App">
    <h1>Want to see other people's projects? Enter a Github username and Voila!</h1>
    <ScrollToTop />
    <Switch>
      <Route>
      <RepoPage />
      </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
