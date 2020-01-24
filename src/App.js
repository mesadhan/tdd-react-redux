import React, { Component } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Home from './Home';
import About from './About';
import './app.scss'


import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";


class App extends Component {
  render() {
    return (

      <Router basename={process.env.PUBLIC_URL}>

        <div data-test="appComponent" className="App">


          <Header />
          <Nav />


          {/* {process.env.PUBLIC_URL} -  {process.env.NODE_ENV} */}



          {/* define all the route */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;