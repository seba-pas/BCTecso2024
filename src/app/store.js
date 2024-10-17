import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import homeReducer from "../features/home/homeData";
import whishlistReducer from "../features/wishlist/whishlistSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    whishlist: whishlistReducer
  },
});
