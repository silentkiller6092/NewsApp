import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, ImageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={
              !ImageUrl
                ? "https://static.foxnews.com/foxnews.com/content/uploads/2023/07/GettyImages-1556771099.jpg"
                : ImageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
