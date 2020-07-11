import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/:id" component={Detail} />
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
