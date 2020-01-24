import React from 'react';
import DataFetching from './components/DataFetching';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Question from './components/Question';
import Manxe from './components/Manxe'


function App() {
  return (
    <div >
      <DataFetching />
    </div>
  );
}

export default App;
