import { createSlice } from "@reduxjs/toolkit";

const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    bandAdded: (state, action) => {
      state.entities.push(action.payload);
    },
  },
});

// actions export
export const { bandAdded } = bandsSlice.actions;

// reducer export
export default bandsSlice.reducer;
