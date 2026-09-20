import { Route, Routes } from "react-router";
import Home from "./components/Home";
import TrackList from "./components/TrackList";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracks" element={<TrackList />} />
      </Routes>
    </>
  );
}

export default App;
