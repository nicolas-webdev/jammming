import React from "react";

const Track = ({
  id,
  name,
  uri,
  artist,
  album,
  isRemoval,
  onAdd,
  onRemove,
}) => {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>
          {artist} | {album}
        </p>
      </div>

      {isRemoval ? (
        <button onClick={() => onRemove({ id })} className="Track-action">
          -
        </button>
      ) : (
        <button
          onClick={() => onAdd({ name, artist, album, id, uri })}
          className="Track-action"
        >
          +
        </button>
      )}
    </div>
  );
};

export default Track;
