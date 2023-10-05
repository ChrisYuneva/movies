import { Game, News } from '../store/types/types';
import { API_PATH } from './consts/consts';

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

// export function getMovies(query = '') {
//     return api<Posts[], {}>(`${API_PATH}${query}`);
// }
//
// export function addPost() {
//     return api<Posts, Posts>(`${API_PATH}`, "POST", {'Content-type': 'application/json; charset=UTF-8',}, {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
// }
//
// export function testPost(body: TestPost) {
//     console.log(body)
//     return api<TestPost, TestPost>(`${TEST_PATH}/user`, "POST", {}, {email: body.email, password: body.password})
// }
