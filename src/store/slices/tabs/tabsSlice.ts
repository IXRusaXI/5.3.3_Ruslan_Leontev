import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTab: 'Москва',
}

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const tabsActions = tabsSlice.actions;
export default tabsSlice.reducer;