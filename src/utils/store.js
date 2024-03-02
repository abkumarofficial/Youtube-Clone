import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import { toggleMenu, closeMenu } from "./appSlice";
import searchSlice from "./searchSlice";
import { cacheResults } from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
export { toggleMenu, closeMenu, cacheResults };
