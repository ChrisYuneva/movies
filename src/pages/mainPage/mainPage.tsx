import { Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import moviesSlice from '../../store/moviesSlice/moviesSlice';
import { getMovies } from '../../api/getData';
import MovieCard from "../../components/moviCard/movieCard";

function MainPage() {
    const dispatch = useAppDispatch();
    const {loading, get, error} = moviesSlice.actions;
    const {isLoading, movies, errorMessage} = useAppSelector((state) => state.movies);

    function getMoviesList() {
        if (movies.results.length === 0) {
            dispatch(loading());
        }
        getMovies()
            .then((response) => dispatch(get(response))
            );
    }

    useEffect(() => {
        dispatch(loading);
        getMoviesList();
    }, [dispatch, loading]);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='h3'>MoviesList</Typography>
            </Grid>
            {isLoading && <span>loading</span>}
            {
                movies.results.map((el) => {
                    return <Grid item xs={4} key={el.id}>
                        <MovieCard image={el.primaryImage?.url} title={el.originalTitleText.text} year={el.releaseYear.year} />
                    </Grid>
                })
            }
        </Grid>
    );
}

export default MainPage;
