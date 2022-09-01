import { useState, useEffect } from "react";
import { CardGrid, Card, Button, Panel, Spinner } from "emerald-ui/lib";
import "./News.scss";

const News = () => {
  const [news, setNews] = useState([]);
  const [fetchNewsResponse, setFetchNewsResponse] = useState([]);
  const [page, setPage] = useState(0);
  const [showViewMoreButton, setShowViewMoreButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const limit = 4;

  useEffect(() => {
    async function fetchNewsFromAPI() {
      const response = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
      );
      const data = await response.json();
      setFetchNewsResponse(data.articles);      
    }
    fetchNewsFromAPI();
  }, []);

  useEffect(() => {
    if (fetchNewsResponse.length > 0 && isLoading) {      
      const articles = [
        ...news,
        ...fetchNewsResponse.slice(page * limit, page * limit + limit),
      ];
      setNews(articles);
      setPage(page + 1);
      setIsLoading(false);
    }
    if (page > 0) setShowViewMoreButton(true);
    if (news.length === fetchNewsResponse.length) {
      setShowViewMoreButton(false);
    }
  }, [fetchNewsResponse, isLoading, news, page]);

  return (
    <section className="news">
      {isLoading && <Spinner />}
      <>
        <h1>Top News</h1>
        <Panel>
          <CardGrid>
            {news.map((article) => {
              return (
                <Card key={article.title}>
                  <img src={article.urlToImage} alt={article.title} />
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eui-card-title"
                  >
                    {article.title}
                  </a>
                  <p>{article.description}</p>
                </Card>
              );
            })}
          </CardGrid>
        </Panel>
        {showViewMoreButton && (
          <Button
            className="view-more-stories-btn"
            color="brand"
            onClick={() => setIsLoading(true)}
          >
            <span>View more stories</span>
          </Button>
        )}
      </>
    </section>
  );
};

export default News;
