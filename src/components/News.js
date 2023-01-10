import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=45d17088ea4a48aa85c8fbcbad1d4fdf&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false});
  }

  handlePreClick = async () => {
    console.log("Previous");
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=45d17088ea4a48aa85c8fbcbad1d4fdf&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState ({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  };

  handleNextClick = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=45d17088ea4a48aa85c8fbcbad1d4fdf&page=${
      this.state.page + 1}&pageSize=${this.props.pageSize}`;
    
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsDekho - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://st1.bgr.in/wp-content/uploads/2023/01/Tecno-Phantom-X2-6.jpg"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreClick}
            disabled ={this.state.page<=1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
          >
            {" "}
            Next &#8594;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default News;
