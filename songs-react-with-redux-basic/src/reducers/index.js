import { combineReducers } from 'redux';

/*
knote: step3 - define reducers functions. These are data modifiers, outputters based on action and data passed.
  -each reducers always passed arg of "action": we then use :action.type and action.payload 
*/
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

/*
knote: step3a - following is what is available to rest of the project as "redux-store"
    -this defines whole data of our app, under redux
*/
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
