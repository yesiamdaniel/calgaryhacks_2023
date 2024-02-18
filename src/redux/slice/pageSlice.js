import { createSlice } from '@reduxjs/toolkit'
import { PAGES, PAGE_SLICE_NAME } from '../../constants/actions'

const initialState = {
    currentPage: PAGES.HOME,
}

export const pageSlice = createSlice({
    name: PAGE_SLICE_NAME,
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setPage } = pageSlice.actions;
export const selectCurrentPage = (state) => state.page.currentPage;

export const pageReducer = pageSlice.reducer;