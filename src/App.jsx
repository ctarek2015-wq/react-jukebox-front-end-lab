import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import TrackServices from "../services/TrackServices";
import Home from "./components/Home";
import TrackForm from "./components/TrackForm";
import "./App.css";

function App() {
  const [tracks, setTracks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
  });
  useEffect(() => {
    const fetchTracks = async () => {
      const data = await TrackServices.getTracks();
      setTracks(data);
    };
    fetchTracks();
  }, [formData]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home tracks={tracks} />} />
        <Route
          path="/add-track"
          element={<TrackForm formData={formData} setFormData={setFormData} />}
        />
      </Routes>
    </>
  );
}

export default App;
