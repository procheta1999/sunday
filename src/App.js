import logo from './logo.svg';
import { trackPromise } from 'react-promise-tracker';
import { Route, Switch } from 'react-router-dom';
import Intro from './pages/intro';
import LoadingOverlay from 'react-loading-overlay';
import Loader from 'react-loader-spinner'

function App() {

  return (
    <div className="App">
      <Loader
      type="BallTriangle"
      color="white"
      timeout={7000}
      />
      <Switch>
    
        <Route exact path="/" component={Intro}/>
      </Switch>
    </div>
  );
}

export default App;
