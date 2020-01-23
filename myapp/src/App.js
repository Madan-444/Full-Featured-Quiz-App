import React from 'react';
import DataFetching from './components/DataFetching';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Question from './components/Question';


function App() {
  return (
    <div >
      <DataFetching />
      {/* <Router>
        <Switch >
          {/* <Route exact path='/'> <DataFetching /> </Route>
          <Route  path='/question'> <Question/> </Route> */}
        {/* </Switch> */}
        
      {/* </Router> */} */}

    </div>
  );
}

export default App;
