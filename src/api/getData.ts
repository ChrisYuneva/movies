function api<T>(url: string, headers?: HeadersInit): Promise<T> {
    return fetch(url, {
        method: 'GET',
        headers: {
            ...headers,
            'X-RapidAPI-Key': '1391600961mshb1f7c75708dec13p101a01jsna697a9c057e2',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    }).then((response) => {
        return response.json() as Promise<T>;
    });
}

export default api;