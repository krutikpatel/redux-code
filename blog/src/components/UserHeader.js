import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

/*
knote: state.users is usersReducer, named in index.js of Reducers
  -where did ownProps come from?
    -passed by PostList component like normal props to this component

  -IMP:  mapStateToProps function cant refer to component props using this.props
    -redux passed second arg called "ownProps" that contains component's props 
*/
const mapStateToProps = (state, ownProps) => {
  /*
  knote: this is JS builtin find function on Array object
  */
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
