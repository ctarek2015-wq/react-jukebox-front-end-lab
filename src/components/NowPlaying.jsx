import { useNavigate } from "react-router";
import TrackServices from "../../services/TrackServices";
const NowPlaying = ({ currentTrack }) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Now Playing</h1>
        <p>
          {currentTrack.title} - {currentTrack.artist}{" "}
        </p>
      </div>
    </>
  );
};

export default NowPlaying;
