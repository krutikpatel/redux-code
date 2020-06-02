import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

/*
knote: sequence of events
  -component renders (with empty props from reducer)
  -then componentDidMount() gets called.
  -that calls action to get/fetch data from API
  -that calls reducer to update state
  -that invokes mapStateToProps again by redux
  -that invokes render() again because state/props changed
*/
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
    //console.log('component did mount');
  }

  renderList() {
    //console.log(this.props);
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

/*
knote: IMP : state.posts is usersReducer, named in index.js of Reducers
  -infact, state is combinedReducers, so state is combination of all reducers ! :)
*/
const mapStateToProps = state => {
  console.log(state);
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
