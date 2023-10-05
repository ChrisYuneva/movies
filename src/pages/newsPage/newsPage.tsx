import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import newsSlice from '../../store/newsSlice/newsSlice';
import { getAllNews } from '../../api/getData';
import { useEffect } from 'react';

function NewsPage() {
    const dispatch = useAppDispatch();
    const { loading, get, error } = newsSlice.actions;
    const { isLoading, news, errorMessage } = useAppSelector((state) => state.news);

    function getNews() {
        if (news.length === 0) {
            dispatch(loading());
            getAllNews().then((response) => dispatch(get(response)));
        }
    }

    useEffect(() => {
        dispatch(loading);
        getNews();
    }, [dispatch, loading]);

    return (
        <>
            {news.map((el) => {
                return (
                    <>
                        <h3>{el.title}</h3>
                        <span>{el.short_description}</span>
                        <span>
                            Read : <a href={el.article_url}> {el.article_url}</a>
                        </span>
                    </>
                );
            })}
        </>
    );
}

export default NewsPage;
