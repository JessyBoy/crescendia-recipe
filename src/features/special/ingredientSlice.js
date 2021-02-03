import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../service/axios";
export const getIngredients = createAsyncThunk(
  "recipe/getIngredients",
  async () => {
    const response = await axios.get("/specials");
    return response.data;
  }
);

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState: {
    ingredients: [],
  },
  extraReducers: {
    [getIngredients.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.ingredients = action.payload;
    },
  },
});

export const ingredientSelect = (state) => state.ingredient;

export default ingredientSlice.reducer;
