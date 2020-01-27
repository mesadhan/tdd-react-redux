import React, { Component } from 'react';
import Headline from './core/headline';
import SharedButton from './core/button';
import ListItem from './core/listitem'
import IconWithListfrom from './core/IconWithList'
import { connect } from 'react-redux';
import { fetchPosts, fetchFortnitePosts } from '../actions';

import './home.scss'


const persons = [{
  firstName: 'Md. Sadhan',
  lastName: 'Sarker',
  email: 'cse.sadhan@gmail.com',
  age: 25,
  onlineStatus: true
}];

const initialState = {
  hideBtn: false
}


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
    this.loadData = this.loadData.bind(this)
  }

  loadData() {
    this.props.fetchPosts();
    this.props.fetchFortnitePosts();
    this.updateStateHideBtn();
  }

  updateStateHideBtn() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    })
  }

  updateGivenNumber(number) {
    return number + 1;
  }

  render() {

    const { posts, fortnitePosts } = this.props;
    const { hideBtn } = this.state;


    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.loadData
    }

    return (
      <div data-test="homeComponent" className="App">
        <section className="main">

          <Headline
            header="Post 1"
            description="Sample Discription About that post, I think you are enjoy that"
            persons={persons} />

          {!hideBtn &&
            <SharedButton {...configButton} />
          }

          {fortnitePosts &&
          <div>
            {fortnitePosts.map((data, index) => {

              const {itemId} = data;
              const configurationListItem = {
                name: data.item.name,
                //description: data.item.name,
                icon: data.item.images.icon,
                ratings: data.item.ratings
              }

              return (
                  <IconWithListfrom key={index} {...configurationListItem}/>
              )
            })}
          </div>
          }

          {/*{posts.length > 0 &&
            <div>
              {posts.map((post, index) => {

                const {title, body} = post;
                const configurationListItem = {
                  title,
                  description: body
                }

                return (
                  <ListItem key={index} {...configurationListItem}/>
                )
              })}
            </div>
          }*/}

        </section>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    fortnitePosts: state.posts.data
  }
}

// if we and to override dispatcher method
const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchFortnitePosts: () => dispatch(fetchFortnitePosts()),
})

//export default connect(mapStateToProps, { fetchPosts })(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
