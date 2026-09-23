import TrackList from "./TrackList";
import NowPlaying from "./NowPlaying";
import { useNavigate } from "react-router";
import { useState } from "react";
const Home = ({ tracks, setTracks, setLoading }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add-track");
  };

  return (
    <div>
      <h1>Welcome to the Jukebox</h1>

      <button onClick={handleClick}>New Track</button>

      <TrackList
        tracks={tracks}
        setTracks={setTracks}
        setLoading={setLoading}
        isPlaying={isPlaying}
        currentTrack={currentTrack}
        setIsPlaying={setIsPlaying}
        setCurrentTrack={setCurrentTrack}
      />
      {isPlaying && <NowPlaying currentTrack={currentTrack} />}
    </div>
  );
};

export default Home;
