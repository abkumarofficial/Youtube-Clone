import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import { toggleMenu, closeMenu } from "./appSlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export default store;
export { toggleMenu, closeMenu };
