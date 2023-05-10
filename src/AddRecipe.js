import React, { useState } from "react";
import axios from "axios";

import "./AddRecipe.css";

function AddRecipe() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/recipes", {
        name,
        description,
        country,
        photo,
      });
      console.log("Recipe added:", response.data);
      setName("");
      setDescription("");
      setCountry("");
      setPhoto("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-recipe-container">
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="country">Country of origin:</label>
          <select
            id="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="">Please select a country</option>
            <option value="Italy">Italy</option>
            <option value="France">France</option>
            <option value="Mexico">Mexico</option>
          </select>
        </div>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="text"
            id="photo"
            value={photo}
            onChange={(event) => setPhoto(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRecipe;
