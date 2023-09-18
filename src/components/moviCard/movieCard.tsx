import { Card, CardMedia, Typography } from "@mui/material";

interface MovieCardPropsType {
    image: string;
    title: string;
    year: number;
}

function MovieCard({ image, title, year }: MovieCardPropsType) {
    return (
        <Card>
            <CardMedia image={image} sx={{height: '100px'}} />
            <Typography variant='h4'>
                {title}
            </Typography>
            <Typography>
                {year}
            </Typography>
        </Card>
    )
}

export default MovieCard;