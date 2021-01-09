import React from 'react';
import Home from './containers/Home';
import Notes from './containers/Notes';
import Login from './containers/Login';
import Registration from './containers/Registration';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/registration'>
            <Registration />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/notes'>
            <Notes />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
