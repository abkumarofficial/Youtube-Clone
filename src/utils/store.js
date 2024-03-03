import { configureStore } from "@reduxjs/toolkit";
import appSlice, { toggleMenu, closeMenu } from "./appSlice";
import searchSlice, { cacheResults } from "./searchSlice";
import chatSlice, { addMessage } from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    search: searchSlice.reducer,
    chat: chatSlice.reducer,
  },
});

export default store;
export { toggleMenu, closeMenu, cacheResults, addMessage };
