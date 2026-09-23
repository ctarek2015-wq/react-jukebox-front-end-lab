import { useNavigate, useParams } from "react-router";
import TrackServices from "../../services/TrackServices";
import { useEffect } from "react";

const TrackForm = ({ formData, setFormData, tracks }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const track = tracks.find((t) => t._id === id);
      if (track) {
        setFormData({
          title: track.title,
          artist: track.artist,
        });
      }
    }
  }, []);
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
      if (id) {
        await TrackServices.updateTrack(id, formData);
      } else {
        await TrackServices.createTrack(formData);
      }
      setFormData({
        title: "",
        artist: "",
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating/updating track:", error);
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
      <button type="submit">{id ? "Update Track" : "Add Track"}</button>
    </form>
  );
};

export default TrackForm;
