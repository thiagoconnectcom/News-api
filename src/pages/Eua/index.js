import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import axios from 'axios';
import busca from '../../assets/imgs/search.svg';

const APIurl =
  'https://newsapi.org/v2/top-headlines?sources=usa-today&apiKey=346ac18265dd41adb781feddad67b508';

class Eua extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      search: '',
      activePage: 1,
      countPerPage: 7
    };
  }

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  componentDidMount() {
    this.getArticles(this.props.default);
  }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime =
      day +
      '/' +
      month +
      '/' +
      year +
      ' | ' +
      hour +
      ':' +
      (minute < 10 ? '0' + minute : minute);

    return composedTime;
  }

  getArticles(url) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=usa-today&apiKey=346ac18265dd41adb781feddad67b508`
      )
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        console.log(articles);
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value });
  };

  render() {
    const { search } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="right">
              <input
                placeholder="Search Title ..."
                type="text"
                onChange={this.handleSearch}
                className="search"
              />
              <img className="search-img" src={busca} />
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.articles
            .filter(item => RegExp(search, 'i').test(item.title))
            .filter(
              (data, index) =>
                index >=
                  this.state.countPerPage * (this.state.activePage - 1) &&
                index < this.state.countPerPage * this.state.activePage
            )
            .map(news => {
              return (
                <div className="col-md-6">
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    <div className="card top" key={news.title}>
                      <img
                        className="card-img-top"
                        src={news.urlToImage}
                        alt=""
                      />
                      <div className="card-body">
                        <p className="text-center cinza">
                          {this.formatDate(news.publishedAt)}
                        </p>
                        <h3 className="text-center azul">
                          {news.title.length < 24
                            ? `${news.title}`
                            : `${news.title.substring(0, 28)}...`}
                        </h3>
                        <p className="card-text text-center cinza">
                          {news.description.length < 50
                            ? `${news.description}`
                            : `${news.description.substring(0, 55)}...`}
                        </p>
                        <h6 className="text-center nome">
                          By
                          {news.author ? news.author : ' Autor Desconhecido'}
                        </h6>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          <div className="col-md-12">
            <div className="text-center">
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={6}
                totalItemsCount={this.state.articles.length}
                pageRangeDisplayed={6}
                onChange={this.handlePageChange}
                innerClass="pagination"
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Eua;
