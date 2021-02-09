import React from "react";
import Track from "./Track";

const TrackList = ({ tracks, isRemoval, onAdd, onRemove }) => {
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track
          id={track.id}
          uri={track.uri}
          key={track.id}
          name={track.name}
          album={track.album}
          artist={track.artist}
          isRemoval={isRemoval}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TrackList;
