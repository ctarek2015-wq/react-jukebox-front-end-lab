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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTracks = async () => {
      const data = await TrackServices.getTracks();
      setTracks(data);
    };
    fetchTracks();
  }, [loading, formData]);

  if (loading === true) return <p>Loading...</p>;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tracks={tracks}
              setTracks={setTracks}
              setLoading={setLoading}
            />
          }
        />
        <Route
          path="/add-track"
          element={<TrackForm formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/edit-track/:id"
          element={
            <TrackForm
              formData={formData}
              setFormData={setFormData}
              tracks={tracks}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
