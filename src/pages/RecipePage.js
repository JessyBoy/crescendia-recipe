import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Recipe from "../features/recipe/Recipe";
import RecipeDetails from "../features/recipe/RecipeDetails";
import { getRecipes } from "../features/recipe/recipeSlice";
import { getIngredients } from "../features/special/ingredientSlice";
import bg from "../resources/bg.jpg";

function RecipePage({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getIngredients());
  });
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        width: "100%",
        backgroundPosition: "center",
      }}
    >
      <Switch>
        <Route path={match.url + "view-recipe/:id"} component={RecipeDetails} />
        <Route path={match.url + "/"} component={Recipe} />
      </Switch>
    </div>
  );
}

export default RecipePage;
