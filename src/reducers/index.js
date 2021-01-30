import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:08" },
    { title: "Macarena", duration: "2:28" },
    { title: "All Star", duration: "2:43" },
    { title: "Magnolia", duration: "3:13" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
