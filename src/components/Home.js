import React, {Component} from 'react';
import IconWithListfrom from './core/IconWithList'
import {connect} from 'react-redux';
import {fetchFortnitePosts, fetchPosts} from '../actions';

import './style.scss'
import {Link} from "react-router-dom";


class Home extends Component {

  constructor(props) {
    super(props);

    this.loadData = this.loadData.bind(this);
    this.loadData();    // initially load data
  }

  loadData() {
    this.props.fetchFortnitePosts();
  }

  render() {
    const { dumPosts, fortnitePosts } = this.props;

    return (
      <div data-test="homeComponent" className="Home">
        <section className="main">


          {fortnitePosts &&
          <div>
            {fortnitePosts.map((data, index) => {

              const {itemId} = data;
              const configurationListItem = {
                name: data.item.name,
                icon: data.item.images.icon,
                ratings: data.item.ratings
              };

              return (

                  <Link
                      to={{
                        pathname: `/item/${itemId}`,
                        state: {
                          singlePost: configurationListItem
                        }
                      }}
                      key={index}>
                    <IconWithListfrom {...configurationListItem}/>
                  </Link>
              )
            })}
          </div>
          }

        </section>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    dumPosts: state.posts,
    fortnitePosts: state.posts.data
  }
};

// if we and to override dispatcher method
const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchFortnitePosts: () => dispatch(fetchFortnitePosts()),
});

//export default connect(mapStateToProps, { fetchPosts })(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
