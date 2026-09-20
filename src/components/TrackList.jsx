import { useEffect, useState } from "react";
import TrackServices from "../../services/TrackServices";

const TrackList = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const data = await TrackServices.getTracks();
      setTracks(data);
    };
    fetchTracks();
  }, []);
  console.log(tracks);
  return (
    <div>
      <h1>Track List</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>{track.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
