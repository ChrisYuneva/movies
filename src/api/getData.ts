import { Game, News } from '../store/types/types';
import { API_PATH } from './consts/consts';
import { FilterParams, FilterTagParams } from '../components/types/types';

type Method = 'GET' | 'POST';

export function api<T, BODY extends object | string | boolean | number | void>(
    url: string,
    method?: Method,
    headers?: HeadersInit,
    body?: BODY
): Promise<T> {
    return fetch(url, {
        method: method,
        headers: {
            'X-RapidAPI-Key': '1391600961mshb1f7c75708dec13p101a01jsna697a9c057e2',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
        },
        body: JSON.stringify(body)
    }).then((response) => {
        return response.json() as Promise<T>;
    });
}

export function getAllGames() {
    return api<Game[], {}>(`${API_PATH}/games`);
}

export function getAllNews() {
    return api<News[], {}>(`${API_PATH}/latestnews`);
}

function toQueryString<T>(obj: T) {
    let queryString = [];
    for (let i in obj) {
        if (obj[i] !== '') {
            queryString.push(`${i}=${obj[i]}`);
        }
    }
    return `?${queryString.join('&')}`;
}

export function getGamesByFilter(queryParams: FilterParams) {
    const params =
        queryParams.category.split('.').length > 1
            ? {
                  platform: queryParams.platform,
                  tag: queryParams.category,
                  'sort-by': queryParams['sort-by']
              }
            : queryParams;
    return api<Game[], {}>(`${API_PATH}/games${toQueryString(params)}`);
}
