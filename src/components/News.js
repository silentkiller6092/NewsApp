import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  async updatepage() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let articleValue = await data.json();
    this.props.setProgress(70);
    this.setState({
      article: articleValue.articles,
      totalArticles: articleValue.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let articleValue = await data.json();
    this.setState({
      article: this.state.article.concat(articleValue.articles),
      totalArticles: articleValue.totalResults,
      loading: false,
    });
  };
  article = [];
  constructor(props) {
    super(props);
    this.state = {
      article: this.article,
      loading: true,
      page: 1,
      totalArticles: 0,
    };
    document.title = `${this.props.category} This is News`;
  }

  async componentDidMount() {
    this.updatepage();
  }
  render() {
    return (
      <div className=" my-3 ">
        <h2>Top Headlines</h2>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalArticles}
          loader={<Spinner />}
        >
          <div className=" container row">
            {this.state.article.map((item, index) => {
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
  }
}

export default News;
