const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <ul>
      {ingredients.map((ingredient, idx) => (
        <li key={`${ingredient.name}-${idx}`}>
          <span>{ingredient.name}</span>
          <button onClick={() => onAdd(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
