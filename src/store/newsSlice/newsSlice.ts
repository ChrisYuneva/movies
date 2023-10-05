import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { News, initialTypeNews } from '../types/types';

const initialState: initialTypeNews = {
    news: [],
    isLoading: false,
    errorMessage: ''
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        loading(state) {
            state.isLoading = true;
        },
        get(state, action: PayloadAction<News[]>) {
            state.news = action.payload;
            state.isLoading = false;
        },
        error(state, action: PayloadAction<string>) {
            state.errorMessage = action.payload;
            state.isLoading = false;
        }
    }
});

export default newsSlice;
