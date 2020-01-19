import React, { Component } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss'
 

const persons = [{
  firstName: 'Md. Sadhan',
  lastName: 'Sarker',
  email: 'cse.sadhan@gmail.com',
  age: 25,
  onlineStatus: true
}];


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

        <section  className="main">
          <Headline 
          header="Post 1"
          description="Sample Discription About that post, I think you are enjoy that"
          persons={persons}/>
        </section>


      </div>
    );
  }
}

export default App;
