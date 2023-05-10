import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./assets/vegetables-set-left-black-slate.jpg";

function App() {
  return (
    <div className="container">
      <div className="hero-banner">
        <h1>Welcome to Recipe App</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <Link to="/add">
            <h2>Add Recipe</h2>
            <p>Add a new recipe to the collection</p>
          </Link>
        </div>
        <div
          className="card"
          // style={{
          //   backgroundImage: "url('./assets/plate-silhouette-tableware.jpg')",
          // }}
        >
          <Link to="/browse">
            <h2>Browse Recipes</h2>
            <p>Explore the collection of recipes</p>
          </Link>
        </div>
        <div className="card">
          <Link to="https://www.bc.fi/">
            <h2>BC's website</h2>
            <p>Visit Our Website</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
