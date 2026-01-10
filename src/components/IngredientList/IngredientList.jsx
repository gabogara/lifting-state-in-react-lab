import Ingredient from "../Ingredient/Ingredient";
const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <ul>
      {ingredients.map((ingredient, idx) => (
        <Ingredient
          key={`${ingredient.name}-${idx}`}
          ingredient={ingredient}
          buttonLabel="+"
          onClick={() => onAdd(ingredient)}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
