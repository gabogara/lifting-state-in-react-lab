const BurgerStack = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient, idx) => (
        <li key={`${ingredient.name}-${idx}`}>
          <span>{ingredient.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
