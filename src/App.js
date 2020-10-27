import logo from './logo.svg';
import { trackPromise } from 'react-promise-tracker';
import { Route, Switch } from 'react-router-dom';
import Intro from './pages/intro';
import LoadingOverlay from 'react-loading-overlay';


function App() {

  return (
    <div className="App">
<LoadingOverlay
  active
  spinner

  text='Loading your content...'
  >
      <Switch>
    
        <Route exact path="/" component={Intro}/>
      </Switch>
      </LoadingOverlay>
    </div>
  );
}

export default App;
