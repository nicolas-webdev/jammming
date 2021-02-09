import React from "react";
import TrackList from "./TrackList";

const SearchResults = ({ tracks, onAdd }) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList onAdd={onAdd} tracks={tracks} isRemoval={false} />
    </div>
  );
};

export default SearchResults;
