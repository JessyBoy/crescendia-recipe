import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, selectRecipe } from "./recipeSlice";
import { getIngredients } from "../special/ingredientSlice";

//Material UI
import { Grid, Button } from "@material-ui/core";

function Recipe() {
  const { recipes } = useSelector(selectRecipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getRecipes());
  }, [dispatch]);

  const basePath = "http://localhost:3001";

  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "bold",
          paddingTop: "5%",
          color: "white",
        }}
      >
        Recipe Menu's
      </div>
      {recipes &&
        recipes.map((recipe) => {
          return (
            <div key={recipe.uuid} style={{ padding: "5%" }}>
              <Grid
                lg={12}
                item
                container
                style={{
                  // border: "2px solid white",
                  borderRadius: "10px",
                  color: "white",
                  backgroundColor: "rgba(253, 254, 255, 0.1)",
                }}
              >
                <Grid item lg={6} xs={12}>
                  <div>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                      }}
                      src={`${basePath}${recipe.images.full}`}
                      alt="recipes"
                    />
                  </div>
                </Grid>
                <Grid item lg={6} xs={12}>
                  <div
                    style={{
                      textAlign: "right",
                      margin: "5%",
                      fontSize: "30px",
                    }}
                  >
                    <p>Date Posted: {recipe.postDate}</p>
                    <p style={{ fontSize: "60px", fontWeight: "bold" }}>
                      {recipe.title}
                    </p>
                    <p style={{ fontSize: "45px", fontWeight: "semibold" }}>
                      {recipe.description}
                    </p>
                  </div>

                  <Link to={`/view-recipe/${recipe.uuid}`}>
                    <div
                      style={{
                        textAlign: "right",
                        margin: "7%",
                        fontSize: "30px",
                      }}
                    >
                      <Button variant="contained" size="large" color="primary">
                        View Recipe List
                      </Button>
                    </div>
                  </Link>
                </Grid>
              </Grid>
              <br />
              <br />
            </div>
          );
        })}
    </>
  );
}

export default Recipe;
