const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const getTracks = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

const createTrack = async (trackData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trackData),
  });
  return response.json();
};

const updateTrack = async (trackId, trackData) => {
  const response = await fetch(`${BASE_URL}/${trackId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trackData),
  });
  return response.json();
};

const deleteTrack = async (trackId) => {
  await fetch(`${BASE_URL}/${trackId}`, {
    method: "DELETE",
  });
  return;
};

export default { getTracks, createTrack, updateTrack, deleteTrack };
