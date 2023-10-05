import { Card, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface GameCardPropsType {
    id?: number;
    title: string;
    thumbnail: string;
    body: string;
}

function GameCard({ id, title, thumbnail, body }: GameCardPropsType) {
    const navigate = useNavigate();

    return (
        <Card key={id} onClick={() => navigate(`/movies/${id}`)}>
            <Typography variant="h4">{title}</Typography>
            <CardMedia image={thumbnail} sx={{ height: '100px' }} />
            <Typography>{body}</Typography>
        </Card>
    );
}

export default GameCard;
