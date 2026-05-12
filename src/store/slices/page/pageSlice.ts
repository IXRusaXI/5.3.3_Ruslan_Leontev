import { createSlice, type PayloadAction } from '@reduxjs/toolkit';// предполагаем, что интерфейс Vacancy лежит в types.ts
import type { Vacancy } from '../../../pages/types/types';


// Начальное состояние
interface PaginationState {
    activePageNumber: number,
    activePageList: Vacancy[],
    total: number
}

const initialState: PaginationState = {
    activePageNumber: 1,
    total: 0,
    activePageList: []
};

// Создание slice
const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setTotalPages: (state, action: PayloadAction<number>) => {
        state.total = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
        state.activePageNumber = action.payload
    },
    setActivePageList: (state, action: PayloadAction<{filtered: Vacancy[], page: number}>) => {
        const limit = 10

        state.activePageList = action.payload.filtered.slice((action.payload.page - 1) * limit, action.payload.page * limit)
    }
  }
});

export const pageActions = pageSlice.actions;
export default pageSlice.reducer;