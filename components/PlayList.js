import React from "react";
import TrackList from "./TrackList";

const PlayList = ({
  name = "New Playlist",
  tracks,
  onRemove,
  setPlaylistName,
  onSave,
}) => {
  function handleNameChange(e) {
    setPlaylistName(e.target.value);
  }

  return (
    <div className="Playlist">
      <input
        value={name || ""}
        onChange={handleNameChange}
        placeholder="Playlist name..."
      />
      <TrackList tracks={tracks} isRemoval={true} onRemove={onRemove} />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default PlayList;
