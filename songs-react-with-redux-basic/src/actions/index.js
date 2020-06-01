/*
knote: step2 : define all actions under this directory. 
        -This will let developer know what actions are possible on data in this app under redux
        -Actions are way for us to feed new data into redux-store
*/
// Action creator
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
