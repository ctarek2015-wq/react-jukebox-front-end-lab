import { useNavigate } from "react-router";

const TrackList = ({ tracks }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Track List</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track._id}>
            {track.title} - {track.artist}{" "}
            <button onClick={() => navigate(`/edit-track/${track._id}`)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
