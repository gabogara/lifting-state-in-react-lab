import React from "react";

const Ingredient = ({ ingredient, buttonLabel, onClick }) => (
  <li style={{ backgroundColor: ingredient.color }}>
    <span>{ingredient.name}</span>
    <button onClick={onClick}>{buttonLabel}</button>
  </li>
);
export default Ingredient;
