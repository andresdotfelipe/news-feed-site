import './News.scss';
import { useState, useEffect } from 'react';
import { CardGrid, Card, Button } from 'emerald-ui';

const News = () => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);
    const [showViewMoreButton, setShowViewMoreButton] = useState(true);
    const limit = 4;

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
            const data = await response.json();
            const articles = [...news, ...data.articles.slice(page*limit, page*limit+limit)];
            setNews(articles);
            setPage(page+1);
            if (data.articles.slice((page+1)*limit, (page+1)*limit+limit).length < 1) {
                setShowViewMoreButton(false);
            }
        } catch (error) {
            console.log(error)
        }
    }    

    return (
        <section className='news'>
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
            {
                showViewMoreButton &&
                <Button className='view-more-stories-btn' color='brand' onClick={fetchNews}>
                    <span>View more stories</span>
                </Button>
            }            
        </section>

    );
}

export default News;