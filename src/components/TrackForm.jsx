import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TrackServices from "../../services/TrackServices";

const TrackForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await TrackServices.createTrack(formData);
      setFormData({
        title: "",
        artist: "",
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating track:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
        placeholder="Artist"
      />
      <button type="submit">Add Track</button>
    </form>
  );
};

export default TrackForm;
