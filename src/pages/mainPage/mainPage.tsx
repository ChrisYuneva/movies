import { Button, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import gamesSlice from '../../store/gamesSlice/gamesSlice';
import { getAllGames } from '../../api/getData';
import GameCard from '../../components/gameCard/gameCard';
import Basic from '../../components/basic/basic';
import { Link } from 'react-router-dom';

function MainPage() {
    const dispatch = useAppDispatch();
    const { loading, get, error } = gamesSlice.actions;
    const { isLoading, games, errorMessage } = useAppSelector((state) => state.games);

    function getGames() {
        if (games.length === 0) {
            dispatch(loading());
            getAllGames().then((response) => dispatch(get(response)));
        }
    }

    useEffect(() => {
        dispatch(loading);
        getGames();
    }, [dispatch, loading]);

    return (
        <Grid container>
            {isLoading && <span>loading</span>}
            <Basic />
            <Link to={'/news'}>News</Link>
            <Grid item xs={12}>
                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                    Games list
                </Typography>
            </Grid>
            {games.map((el, i) => {
                return (
                    <Grid item xs={4} key={i}>
                        <GameCard
                            id={el.id}
                            title={el.title}
                            thumbnail={el.thumbnail}
                            body={el.title}
                        />
                    </Grid>
                );
            })}
            {/*<Button onClick={test}>Load more</Button>*/}
        </Grid>
    );
}

export default MainPage;
