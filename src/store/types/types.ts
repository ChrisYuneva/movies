export interface Game {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}

export interface initialTypeGames {
    games: Game[];
    isLoading: boolean;
    errorMessage: string;
}

export interface News {
    id: number;
    title: string;
    short_description: string;
    thumbnail: string;
    main_image: string;
    article_content: string;
    article_url: string;
}

export interface initialTypeNews {
    news: News[];
    isLoading: boolean;
    errorMessage: string;
}
