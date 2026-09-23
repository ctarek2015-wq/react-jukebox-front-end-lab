import TrackList from "./TrackList";
import { useNavigate } from "react-router";
const Home = ({ tracks, setTracks, loading, setLoading }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add-track");
  };
  return (
    <div>
      <h1>Welcome to the Jukebox</h1>

      <button onClick={handleClick}>New Track</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TrackList
          tracks={tracks}
          setTracks={setTracks}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </div>
  );
};

export default Home;
