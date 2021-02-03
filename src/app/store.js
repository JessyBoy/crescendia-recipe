import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipe/recipeSlice";
import ingredientReducer from "../features/special/ingredientSlice";

export default configureStore({
  reducer: {
    ingredient: ingredientReducer,
    recipe: recipeReducer,
  },
});
