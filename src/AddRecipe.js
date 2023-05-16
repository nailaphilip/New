import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

import axios from "axios";

import "./AddRecipe.css";

function AddRecipe() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [preparation, setPreparation] = useState("");
  const [country, setCountry] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingridients, setIngridients] = useState([]);
  const options = useMemo(() => countryList().getData(), []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/recipes", {
        name,
        description,
        preparation,
        country,
        photo,
        ingridients,
      });
      alert("Recipe has been added successfully.");
      console.log("Recipe added:", response.data);
      setName("");
      setDescription("");
      setPreparation("");
      setCountry("");
      setPhoto("");
      setIngridients([...ingridients, ""]);
    } catch (error) {
      console.error(error);
    }
  };

  const changeHandler = (selectedOption) => {
    setCountry(selectedOption.label);
  };

  const handleAddIngridient = () => {
    setIngridients([...ingridients, ""]);
  };

  const handleIngridientChange = (index, value) => {
    const updatedIngridients = [...ingridients];
    updatedIngridients[index] = value;
    setIngridients(updatedIngridients);
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
          <label htmlFor="preparation">Preparation:</label>
          <textarea
            id="preparation"
            value={preparation}
            onChange={(event) => setPreparation(event.target.value)}
          />
        </div>
        <div className="select-country">
          <label htmlFor="country">Country of origin:</label>
          <Select
            options={options}
            value={options.find((option) => option.value === country)}
            onChange={changeHandler}
          />

          {/* <select
            id="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="">Please select a country</option>
            <option value="Italy">Italy</option>
            <option value="France">France</option>
            <option value="Mexico">Mexico</option>
          </select> */}
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
        <div className="ingredients-container">
          <label htmlFor="ingridients">Ingredients:</label>
          {ingridients.map((ingridient, index) => (
            <input
              key={index}
              type="text"
              value={ingridient}
              onChange={(event) =>
                handleIngridientChange(index, event.target.value)
              }
            />
          ))}
          <button
            type="button"
            className="add-ingredient-btn"
            onClick={handleAddIngridient}
          >
            Add Ingredient
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRecipe;
