import axios from "axios";

const submitDogBreed = async (breed) => {
  const response = await axios.post("http://localhost:3001/dogs", {
    dog_form: { breed },
  });
  return response.data;
};

export default submitDogBreed;
