import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../service/axios";

export const getRecipes = createAsyncThunk("recipe/getRecipes", async () => {
  const response = await axios.get("/recipes");
  return response.data;
});

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
  },
  extraReducers: {
    [getRecipes.fulfilled]: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

export const selectRecipe = (state) => state.recipe;

export default recipeSlice.reducer;
