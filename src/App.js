import React, { Component } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listitem'
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

import './app.scss'


const persons = [{
  firstName: 'Md. Sadhan',
  lastName: 'Sarker',
  email: 'cse.sadhan@gmail.com',
  age: 25,
  onlineStatus: true
}];


class App extends Component {

  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this)
  }

  loadData() {
    this.props.fetchPosts();
  }

  render() {

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.loadData
    }

    return (
      <div className="App">

        <Header />

        <section className="main">

          <Headline
            header="Post 1"
            description="Sample Discription About that post, I think you are enjoy that"
            persons={persons} />

          <SharedButton {...configButton} />

        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
