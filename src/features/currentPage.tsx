import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CurrentPageState {
  value: number;
}

const initialState: CurrentPageState = {
  value: 0,
};

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { change } = currentPageSlice.actions;
export default currentPageSlice.reducer;
