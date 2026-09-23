const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const getTracks = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (error) {
    console.error("Error fetching tracks:", error);
  }
};

const createTrack = async (trackData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trackData),
    });
    return res.json();
  } catch (error) {
    console.error("Error creating track:", error);
  }
};

const updateTrack = async (trackId, trackData) => {
  try {
    const res = await fetch(`${BASE_URL}/${trackId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trackData),
    });
    return res.json();
  } catch (error) {
    console.error("Error updating track:", error);
  }
};

const deleteTrack = async (trackId) => {
  try {
    await fetch(`${BASE_URL}/${trackId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting track:", error);
  }
};

export default { getTracks, createTrack, updateTrack, deleteTrack };
