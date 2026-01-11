import Ingredient from "../Ingredient/Ingredient";
const BurgerStack = ({ ingredients, onRemove }) => {
  return (
    <ul>
      {ingredients.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        ingredients.map((ingredient, idx) => (
          <Ingredient
            key={`${ingredient.name}-${idx}`}
            ingredient={ingredient}
            onClick={() => onRemove(idx)}
            buttonLabel="X"
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
