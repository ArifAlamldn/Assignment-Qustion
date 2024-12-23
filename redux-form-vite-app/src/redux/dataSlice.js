import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.entries.push(action.payload);
    },
    updateEntry: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.entries.findIndex((entry) => entry.id === id);
      if (index !== -1) {
        state.entries[index] = updatedData;
      }
    },
  },
});

export const { addEntry, updateEntry } = dataSlice.actions;
export default dataSlice.reducer;
