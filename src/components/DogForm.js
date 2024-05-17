import React, { useState } from "react";
import submitDogBreed from "../services/DogImageService";

const DogForm = () => {
  const [breed, setBreed] = useState("");
  const [submittedBreed, setSubmittedBreed] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await submitDogBreed(breed);
      setSubmittedBreed(breed);
      setImage(data.image_url);
      setError("");
    } catch (error) {
      setError("Dog breed not found");
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

        {image && (
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
