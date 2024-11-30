BreedSelector.js
// src/components/BreedSelector.js
import React from 'react';

const BreedSelector = ({ breeds, selectedBreed, setSelectedBreed, imageCount, setImageCount, fetchImages }) => {
  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  const handleImageCountChange = (event) => {
    setImageCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchImages();
  };

  return (
    <form onSubmit={handleSubmit} className="breed-selector">
      <label>
        Select Breed:
        <select value={selectedBreed} onChange={handleBreedChange}>
          <option value="">--Select Breed--</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed.charAt(0).toUpperCase() + breed.slice(1)}
            </option>
          ))}
        </select>
      </label>

      <label>
        Number of Images:
        <input
          type="number"
          value={imageCount}
          onChange={handleImageCountChange}
          min="1"
          max="100"
        />
      </label>

      <button type="submit">Fetch Images</button>
    </form>
  );
};

export default BreedSelector;
