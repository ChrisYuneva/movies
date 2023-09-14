import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { initialTypeMovies, Movie } from '../types/types';

const initialState: initialTypeMovies = {
    movies: [],
    isLoading: false,
    errorMessage: ''
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        loading(state) {
            state.isLoading = true;
        },
        get(state, action: PayloadAction<Movie[]>) {
            state.movies = action.payload;
            state.isLoading = false;
        },
        error(state, action: PayloadAction<string>) {
            state.errorMessage = action.payload;
            state.isLoading = false;
        }
    }
});

export default moviesSlice;
