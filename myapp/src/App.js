import React from 'react';
import DataFetching from './components/DataFetching';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
        <Switch>
          {/* <Route  path = '/' component={Answers} /> */}
          <Route   path = '/' component={DataFetching} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
