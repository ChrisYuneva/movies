import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import moviesSlice from '../../store/moviesSlice/moviesSlice';
import api from '../../api/getData';
import { log } from 'util';

function MainPage() {
    const dispatch = useAppDispatch();
    const { loading, get, error } = moviesSlice.actions;
    const { isLoading, movies, errorMessage } = useAppSelector((state) => state.movies);

    useEffect(() => {
        dispatch(loading);
        api('https://moviesdatabase.p.rapidapi.com/titles').then((response) =>
            console.log(response)
        );
    }, [dispatch, loading]);

    return (
        <Grid container>
            {isLoading && <span>loading</span>}
            <Grid item>1</Grid>
            <Grid item>2</Grid>
            <Grid item>354</Grid>
        </Grid>
    );
}

export default MainPage;
