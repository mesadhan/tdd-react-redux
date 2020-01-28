import React, { Component } from 'react';
import Header from './components/layouts/header';
import Nav from './components/layouts/nav';
import Home from './components/Home';
import About from './components/About';
import './app.scss'

import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

import BlogPost from "./components/BlogPost";
import DetailsPage from "./components/DetailsPage";


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
            <Route path="/item/:id" exact component={DetailsPage} />
            <Route path="/blog" exact component={BlogPost} />
            <Route path="/about" exact component={About} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
