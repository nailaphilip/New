import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./RecipePage.css";

function RecipePage() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(params);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3001/recipes/${params.id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const countryName = data.country;

  return (
    <div className="recipe-card">
      <div className="flag-overlay">
        {/* <img
          className="flag"
          src={`./assets/flags/${recipe.country.value}.svg`}
          alt={countryName}
        /> */}
      </div>
      <img className="recipe-photo" src={data.photo} alt={data.name} />
      <div className="recipe-card-content">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <p>{data.preparation}</p>
        <p>Country of origin: {countryName}</p>
        {data.ingridients && data.ingridients.length > 0 && (
          <>
            <table className="ingredient-table">
              <thead>
                <tr>
                  <th>Ingredients</th>
                </tr>
              </thead>
              <tbody>
                {data.ingridients.map((ingridient, index) => (
                  <tr key={index}>
                    <td colSpan="2">{ingridient}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      <button className="go-back-button" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
}

export default RecipePage;
