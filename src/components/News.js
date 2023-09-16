import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setloding] = useState(true);
  const [pages, setPages] = useState(1);
  const [totalArticles, settotalArticles] = useState(0);

  // document.title = `${props.category} This is News`;

  const updatepage = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${pages}&pageSize=${props.pageSize}`;
    setloding(true);
    let data = await fetch(url);
    props.setProgress(40);
    let articleValue = await data.json();
    props.setProgress(70);
    setArticles(articleValue.articles);
    setloding(false);
    settotalArticles(articleValue.totalResults);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    setPages(pages + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${pages}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let articleValue = await data.json();
    setArticles(articles.concat(articleValue.articles));
    settotalArticles(articleValue.totalResults);
    setloding(false);
  };
  useEffect(() => {
    updatepage();
  }, []);

  return (
    <div className=" my-3 ">
      <h2>Top Headlines</h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalArticles}
        loader={<Spinner />}
      >
        <div className=" container row">
          {articles.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={item.title ? item.title.slice(0, 60) : ""}
                  description={
                    item.description ? item.description.slice(0, 80) : ""
                  }
                  ImageUrl={
                    item.urlToImage
                      ? item.urlToImage
                      : "https://images.moneycontrol.com/static-mcnews/2023/03/Collage-Maker-29-Mar-2023-01-50-PM-3848-770x433.jpg"
                  }
                  newsUrl={item.url}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
