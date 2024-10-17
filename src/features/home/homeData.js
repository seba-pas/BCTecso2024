import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPets, getShelters } from "../../api/setupAxios";

const initialState = {
  pets: [],
  shelters: [],
  resguardPets: [],
};

export const getDataHome = createAsyncThunk("home/getDataHome", async (token, { rejectWithValue }) => {
  try {
    const petsData = await getPets(token);
    const shelterData = await getShelters(token);
    return { pets: petsData, shelters: shelterData };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    filterPets: (state, action) => {
      if (!state.resguardPets.length) state.resguardPets = [...state.pets];
      if (state.pets.every((pet) => pet.tipoAnimal === action.payload)) state.pets = state.resguardPets;
      else state.pets = state.resguardPets.filter((pet) => pet.tipoAnimal === action.payload);
    },
    searchPets: (state, action) => {
      if (!state.resguardPets.length) state.resguardPets = [...state.pets];
      if (action.payload) state.pets = state.resguardPets.filter((pet) => pet.nombre.toLowerCase().includes(action.payload.toLowerCase()));
      else state.pets = state.resguardPets;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataHome.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDataHome.fulfilled, (state, action) => {
        state.loading = false;
        state.pets = action.payload.pets;
        state.shelters = action.payload.shelters;
      })
      .addCase(getDataHome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { filterPets, searchPets } = homeSlice.actions;

export default homeSlice.reducer;
