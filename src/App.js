import React, { Component } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss'
 
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

        <section  className="main">
          <Headline header="Post 1" description="Sample Discription About that post, I think you are enjoy that "/>
        </section>


      </div>
    );
  }
}

export default App;
