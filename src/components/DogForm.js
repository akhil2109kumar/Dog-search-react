import React, { useState } from "react";
import submitDogBreed from "../apis/DogImageApi";
import Loader from "./Loader";

const DogForm = () => {
  const [breed, setBreed] = useState("");
  const [submittedBreed, setSubmittedBreed] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const data = await submitDogBreed(breed);
      setSubmittedBreed(breed);
      setImage(data.image_url);
      setError("");
    } catch (error) {
      setError("Dog breed not found");
      setImage(""); // Clear the image state when error occurs
    } finally {
      setLoading(false); // Set loading to false when response is received
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="breed">Breed:</label>
              <input
                type="text"
                className="form-control"
                id="breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          {error && <p className="text-danger mt-3">{error}</p>}
        </div>

        {loading ? (
        <Loader /> // Display loader when loading state is true
        ) : image && (
        // Display breed and image when loading is false and image is available
        <div className="col-group-img">
          <div className="mt-3">
            <h2>{submittedBreed}</h2>
            <div className="img-box-search">
              <img src={image} alt={submittedBreed} className="img-fluid" />
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default DogForm;
