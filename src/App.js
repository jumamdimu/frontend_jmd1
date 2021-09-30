import React, { useState } from 'react';
import './App.css';
import Preferences from './components/Preferences/Preferences';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

function App() {
    const [token, setToken] = useState();
    if(!token) {
      return <Login setToken={setToken} />
    }
    return (
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
