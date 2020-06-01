import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

/*
knote: step4 - wireup actions, reducers and components together
  -use connect from react-redux
*/
class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)} {/* knote: we are passing function and not calling it. notice that we dont call action function ()*/}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

/*
knote: step4a : connect redux-store data state to props of component
  -then we can use that in component using this.props
  -redux store = reducers which has data
  -this function can be called anything you want
  -Any time redux state changes, this function will be called, and then render of this component will be called
*/
const mapStateToProps = state => {
  return { songs: state.songs };
};

/*
knote: step4b: notice special type of export for component with react-redux
  -following syntax means, connect function returns a function, and with second (), we are calling that returned function. SongList is arg to that second function call

  -Remeber that Action functions are not called as normal function.
  -we do: store.dispatch(actionFunciton(args))
  -And with connect, we dont have to call dispatch
*/
export default connect(
  mapStateToProps,
  { selectSong  : selectSong }  /* knote: step4c we are passing Action as argument here, 
                                  we enlist all the actions that we use in this component
                                  -this is how redux knows that this is Action creator function.
                                  */
)(SongList);
