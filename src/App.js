import './App.css';
import Home from './Components/Home';
import DemoOne from './Components/DemoOne';
import DemoTwo from './Components/DemoTwo';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/demoOne">
            <DemoOne />
          </Route>
          <Route path="/demoTwo">
            <DemoTwo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
