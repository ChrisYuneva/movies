import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import gamesSlice from '../../store/gamesSlice/gamesSlice';
import { Button, Card, CardMedia, Typography } from '@mui/material';

function GameByIdPage() {
    const { id } = useParams<{ id: string }>();

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { loading, get, error } = gamesSlice.actions;
    const { isLoading, games, errorMessage } = useAppSelector((state) => state.games);

    return (
        <div>
            {games.map((el) => {
                if (String(el.id) === id) {
                    return (
                        <>
                            <Button onClick={() => navigate(-1)}>return</Button>
                            <Card>
                                <CardMedia image={el.thumbnail} sx={{ height: '100px' }} />
                                <Typography>{el.title}</Typography>
                            </Card>
                        </>
                    );
                }
            })}
        </div>
    );
}

export default GameByIdPage;
