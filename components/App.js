import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PlayList from "./PlayList";

import Spotify from "../pages/api/Spotify";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrack(track) {
    playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)
      ? setPlaylistTracks(playlistTracks)
      : setPlaylistTracks([...playlistTracks, track]);
  }

  function removeTrack(track) {
    const filteredPlaylist = playlistTracks.filter(
      (playlistTrack) => playlistTrack.id !== track.id
    );
    setPlaylistTracks(filteredPlaylist);
  }

  function savePlaylist() {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
    alert("Saved playlist!");
  }

  function search(searchTerm) {
    Spotify.search(searchTerm).then((searchResult) => {
      setSearchResults(searchResult);
    });
  }

  return (
    <div className="app">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults tracks={searchResults} onAdd={addTrack} />
          <PlayList
            name={playlistName}
            setPlaylistName={setPlaylistName}
            tracks={playlistTracks}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
