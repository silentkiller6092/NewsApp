import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  async updatepage() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let articleValue = await data.json();
    this.setState({
      article: articleValue.articles,
      totalArticles: articleValue.totalResults,
      loading: false,
    });
  }

  hadnlepreviousclick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updatepage();
  };
  handleNextCLik = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updatepage();
  };
  article = [];
  constructor(props) {
    super(props);
    this.state = { article: this.article, loading: false, page: 1 };
    document.title = `${this.props.category} This is News`;
  }

  async componentDidMount() {
    this.updatepage();
  }
  render() {
    return (
      <div className="container my-3 ">
        <h2>Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.article.map((item, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={item.title ? item.title.slice(0, 60) : ""}
                    description={
                      item.description ? item.description.slice(0, 80) : ""
                    }
                    ImageUrl={item.urlToImage}
                    newsUrl={item.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between mt-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.hadnlepreviousclick}
            disabled={this.state.page <= 1}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.handleNextCLik}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
