import TrackList from "./TrackList";
import { useNavigate } from "react-router";
const Home = ({ tracks }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add-track");
  };
  return (
    <div>
      <h1>Welcome to the Jukebox</h1>
      <button onClick={handleClick}>New Track</button>

      <TrackList tracks={tracks} />
    </div>
  );
};

export default Home;
