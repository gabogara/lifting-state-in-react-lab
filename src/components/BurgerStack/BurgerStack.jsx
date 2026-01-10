const BurgerStack = ({ ingredients, onRemove }) => {
  return (
    <ul>
      {ingredients.map((ingredient, idx) => (
        <li
          key={`${ingredient.name}-${idx}`}
          style={{ backgroundColor: ingredient.color }}
        >
          <span>{ingredient.name}</span>
          <button onClick={() => onRemove(idx)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
