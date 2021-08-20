import React from 'react';
import {BrowserRouter , Switch, Route} from "react-router-dom";
import Header from './header/Header';
import Home from './home/Home';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';
import NotFound from './error/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/sign-in' component={SignIn}/>
          <Route exact path='/sign-up' component={SignUp}/>
          <Route  component={NotFound}/>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
