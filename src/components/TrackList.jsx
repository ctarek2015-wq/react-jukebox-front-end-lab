import { useNavigate } from "react-router";
import TrackServices from "../../services/TrackServices";

const TrackList = ({
  tracks,
  setTracks,
  setLoading,
  isPlaying,
  currentTrack,
  setIsPlaying,
  setCurrentTrack,
}) => {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await TrackServices.deleteTrack(id);
      const updatedTracks = tracks.filter((track) => track._id !== id);
      setTracks(updatedTracks);
    } catch (error) {
      console.error("Error deleting track:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNowPlaying = (track) => {
    if (!currentTrack || currentTrack._id !== track._id) {
      setCurrentTrack(track);
      setIsPlaying(true);
    } else {
      setCurrentTrack(null);
      setIsPlaying(false);
    }
  };

  return (
    <>
      <div>
        <h1>Track List</h1>
        <ul>
          {tracks.map((track) => (
            <li key={track._id}>
              {track.title} - {track.artist}{" "}
              <button onClick={() => navigate(`/edit-track/${track._id}`)}>
                Edit
              </button>
              <button onClick={() => handleDelete(track._id)}>Delete</button>
              <button onClick={() => handleNowPlaying(track)}>
                {isPlaying && currentTrack?._id === track._id
                  ? "Pause"
                  : "Play"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TrackList;
