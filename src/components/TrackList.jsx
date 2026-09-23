const TrackList = ({ tracks }) => {
  return (
    <div>
      <h1>Track List</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            {track.title} - {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
