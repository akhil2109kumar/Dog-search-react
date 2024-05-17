import axios from "axios";

const submitDogBreed = async (breed) => {
  const response = await axios.post(process.env.REACT_APP_BACKEND_URL, {
    dog_form: { breed },
  });
  return response.data;
};

export default submitDogBreed;
