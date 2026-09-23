import { Route, Routes, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import TrackServices from "../services/TrackServices";
import Home from "./components/Home";
import TrackList from "./components/TrackList";
import TrackForm from "./components/TrackForm";
import "./App.css";

function App() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const data = await TrackServices.getTracks();
      setTracks(data);
    };
    fetchTracks();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home tracks={tracks} />} />
        <Route path="/tracks" element={<TrackList tracks={tracks} />} />
        <Route path="/tracks/new" element={<TrackForm />} />
      </Routes>
    </>
  );
}

export default App;
