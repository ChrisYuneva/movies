export interface MovieResponse {
    entries: number;
    next: string;
    page: number;
    results: Movie[]
}

export interface Movie {
    id: string;
    _id: string;
    primaryImage: PrimaryImg;
    titleType: TitleType;
    titleText: TitleText;
    originalTitleText: OriginalTitleText;
    releaseYear: ReleaseYear;
    releaseDate: ReleaseDate;
}

export interface PrimaryImg {
    id: string;
    width: number;
    height: number;
    url: string;
    caption: Caption;
    __typename: string;
}

export interface Caption {
    plainText: string;
    __typename: string;
}

export interface TitleType {
    id: string;
    text: string;
    isSeries: boolean;
    isEpisode: boolean;
    __typename: string;
}

export interface TitleText {
    text: string;
    __typename: string;
}

export interface OriginalTitleText {
    text: string;
    __typename: string;
}

export interface ReleaseYear {
    year: number;
    endYear: null;
    __typename: string;
}

export interface ReleaseDate {
    day: null;
    month: null;
    year: number;
    __typename: string;
}

export interface initialTypeMovies {
    movies: MovieResponse;
    isLoading: boolean;
    errorMessage: string;
}
