import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainPage from './pages/mainPage/mainPage';
import GameByIdPage from './pages/gameByIdPage/gameByIdPage';
import NewsPage from './pages/newsPage/newsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/movies/:id',
        element: <GameByIdPage />
    },
    {
        path: '/news',
        element: <NewsPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
