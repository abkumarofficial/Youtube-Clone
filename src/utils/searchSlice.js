import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults(state, action) {
      // Method 1
      // state[Object.keys(action.payload)[0]] =
      //   action.payload[Object.keys(action.payload)[0]];

      //   Method 2
      //   return Object.assign({}, state, action.payload);

      // Method 3
      return { ...state, ...action.payload };
    },
  },
});

export default searchSlice;
export const { cacheResults } = searchSlice.actions;
