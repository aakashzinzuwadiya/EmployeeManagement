import React from "react";
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import AddEmployee from './pages/addEmployee';
import UpdateEmployee from './pages/updateEmployee';
import AddLeave from './pages/addLeave';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/addEmployee" component={AddEmployee}/>
        <Route exact path="/updateEmployee/:id" component={UpdateEmployee}/>
        <Route exact path="/addLeave" component={AddLeave}/>
      </Switch>
    </div>
  );
}

export default App;
