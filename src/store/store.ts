import { configureStore } from '@reduxjs/toolkit';
import gamesSlice from './gamesSlice/gamesSlice';
import newsSlice from './newsSlice/newsSlice';

export const store = configureStore({
    reducer: {
        games: gamesSlice.reducer,
        news: newsSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
