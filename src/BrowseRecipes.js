import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./components/RecipeCard";
import Navbar from "./components/Navbar";

import "./BrowseRecipes.css";

function BrowseRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Browse Recipes</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search recipes by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="recipe-list">
          {recipes
            .filter((recipe) =>
              recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseRecipes;
