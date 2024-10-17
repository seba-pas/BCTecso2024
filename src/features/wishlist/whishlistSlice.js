import { createSlice } from '@reduxjs/toolkit';

const saveWishlist = JSON.parse(localStorage.getItem('whishlist')) || [];

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: saveWishlist,
  reducers: {
    addToWishlist: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload); // Añade si no está en la wishlist
        localStorage.setItem('wishlist', JSON.stringify(state));
      }
    },
    removeFromWishlist: (state, action) => {
        const newState = state.filter(item => item !== action.payload)
        localStorage.setItem('wishlist', JSON.stringify(newState));
        return newState; // Elimina si está en la wishlist
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
