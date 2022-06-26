import './News.scss';
import { useState, useEffect, useCallback } from 'react';
import { CardGrid, Card, Button, Panel, Spinner } from 'emerald-ui/lib';

const News = () => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);
    const [showViewMoreButton, setShowViewMoreButton] = useState(true);
    const [fetchMoreStories, setFetchMoreStories] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const limit = 4;

    const fetchNews = useCallback(
        async () => {
            try {
                if (page === 0 || fetchMoreStories) {
                    setIsLoading(true);
                    const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
                    const data = await response.json();
                    const articles = [...news, ...data.articles.slice(page*limit, page*limit+limit)];
                    setNews(articles);  
                    setPage(page+1);              
                    if (data.articles.slice((page+1)*limit, (page+1)*limit+limit).length < 1) {
                        setShowViewMoreButton(false);
                    }
                    setIsLoading(false);
                    setFetchMoreStories(false);                    
                }
            } catch (error) {
                console.log(error);
            }
        },
        [news, page, limit, fetchMoreStories]
    );

    const handleViewMoreStoriesClick = () => {
        setFetchMoreStories(true);
        fetchNews();
    }

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    return (
        <section className='news'>
            { isLoading ? <Spinner /> :
                <>
                    <Panel>
                        <CardGrid>
                            {
                                news.map(article => {
                                    return (
                                        <Card key={article.title}>
                                            <img src={article.urlToImage} alt={article.title}/>
                                            <a href={article.url} target='_blank' rel='noopener noreferrer' className="eui-card-title">{article.title}</a>
                                            <p>{article.description}</p>
                                        </Card>
                                    );
                                })
                            }            
                        </CardGrid>
                    </Panel>
                    {
                        showViewMoreButton &&
                        <Button className='view-more-stories-btn' color='brand' onClick={handleViewMoreStoriesClick}>
                            <span>View more stories</span>
                        </Button>
                    }
                </>                
            }
        </section>

    );
}

export default News;