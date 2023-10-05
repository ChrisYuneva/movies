import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Game, initialTypeGames } from '../types/types';

const initialState: initialTypeGames = {
    games: [],
    isLoading: false,
    errorMessage: ''
};

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        loading(state) {
            state.isLoading = true;
        },
        get(state, action: PayloadAction<Game[]>) {
            state.games = action.payload;
            state.isLoading = false;
        },
        error(state, action: PayloadAction<string>) {
            state.errorMessage = action.payload;
            state.isLoading = false;
        }
    }
});

export default gamesSlice;
