const IngredientList = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient, idx) => {
        return (
          <li key={idx}>
            {" "}
            <p> {ingredient.name} </p>{" "}
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
