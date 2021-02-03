import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectRecipe } from "./recipeSlice";
import { isEmpty } from "lodash";

//Material UI
import { Button, Checkbox, Grid } from "@material-ui/core";
import Specials from "./Specials";
import { Link } from "react-router-dom";

function RecipeDetails({ match }) {
  const { id } = match.params;
  const { recipes } = useSelector(selectRecipe);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    setRecipe(recipes.filter((rec) => rec.uuid === id));
  }, [id, recipes]);

  const basePath = "http://localhost:3001";

  return (
    <div>
      {!isEmpty(recipe) &&
        recipe.map((recipeDet) => {
          return (
            <div key={recipeDet.uuid} style={{ padding: "5%" }}>
              <Grid
                lg={12}
                item
                container
                style={{
                  border: "2px solid black",
                  borderRadius: "10px",
                }}
              >
                <Grid lg={12} item>
                  <div>
                    <img
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                      }}
                      src={`${basePath}${recipeDet.images.full}`}
                      alt="recipes"
                    />
                  </div>
                </Grid>
                <Grid lg={3} sm={12} xs={12} item>
                  <div
                    style={{
                      textAlign: "center",
                      border: "1px solid black",
                      fontSize: "20px",
                      padding: "5%",
                      margin: "2%",
                      borderRadius: "12px",
                      backgroundColor: "white",
                    }}
                  >
                    <p>Cook Time: {recipeDet.cookTime}</p>
                  </div>
                </Grid>
                <Grid lg={3} sm={12} xs={12} item>
                  <div
                    style={{
                      textAlign: "center",
                      border: "1px solid black",
                      fontSize: "20px",
                      padding: "5%",
                      margin: "2%",
                      borderRadius: "12px",
                      backgroundColor: "white",
                    }}
                  >
                    <p>Preparation Time: {recipeDet.prepTime}</p>
                  </div>
                </Grid>
                <Grid lg={3} sm={12} xs={12} item>
                  <div
                    style={{
                      textAlign: "center",
                      border: "1px solid black",
                      fontSize: "20px",
                      padding: "5%",
                      margin: "2%",
                      borderRadius: "12px",
                      backgroundColor: "white",
                    }}
                  >
                    <p>Servings: {recipeDet.servings}</p>
                  </div>
                </Grid>
                <Grid lg={3} sm={12} xs={12} item>
                  <div
                    style={{
                      textAlign: "center",
                      border: "1px solid black",
                      fontSize: "20px",
                      padding: "5%",
                      margin: "2%",
                      borderRadius: "12px",
                      backgroundColor: "white",
                    }}
                  >
                    <p>Date: {recipeDet.postDate}</p>
                  </div>
                </Grid>
              </Grid>

              {/* Ingredients */}
              <div
                style={{
                  backgroundColor: "white",
                  marginTop: "5%",
                  padding: "3%",
                }}
              >
                <div style={{}}>
                  <h2>INGREDIENTS:</h2>
                </div>
                <div>
                  {recipeDet.ingredients.map((ing) => {
                    return (
                      <div key={ing.uuid}>
                        <Grid lg={12} item container spacing={2}>
                          <Grid item lg={6} sm={12} xs={12}>
                            <div style={{ display: "flex" }}>
                              <Checkbox />
                              <p
                                style={{
                                  fontSize: "20px",
                                  borderBottom: "1px solid green",
                                  textTransform: "capitalize",
                                }}
                              >
                                <span style={{ fontWeight: "bold" }}>
                                  {ing.name}
                                </span>{" "}
                                - {ing.amount}/
                                {ing.measurement === "" ? (
                                  "No measurement saved!"
                                ) : (
                                  <>{ing.measurement}</>
                                )}
                              </p>
                            </div>
                          </Grid>
                        </Grid>

                        <div>
                          <Specials id={ing.uuid} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Directions */}
              {/* Ingredients */}
              <div
                style={{
                  backgroundColor: "white",
                  marginTop: "5%",
                  padding: "3%",
                }}
              >
                <div>
                  <h2>DIRECTIONS:</h2>
                </div>
                <div>
                  {recipeDet.directions.map((dir, index) => {
                    return (
                      <div key={index}>
                        <Grid lg={12} item container spacing={2}>
                          <Grid item lg={8} sm={12} xs={12}>
                            <p
                              style={{
                                fontSize: "20px",
                                textTransform: "capitalize",
                                fontWeight: "bold",
                              }}
                            >
                              {dir.instructions}
                            </p>
                            <hr style={{ margin: 0, borderColor: "green" }} />
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

      <Link to="/">
        <div style={{ padding: "5%" }}>
          <Button variant="contained" size="large" color="primary">
            Back to Recipe Menu's
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default RecipeDetails;
