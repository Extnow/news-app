import React from 'react';
import News from './News';
import Add from './Add';

export default class App extends React.Component {
  state = {
    news: null,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('http://localhost:3000/data/newsData.json')
      .then(response => response.json())
      .then((data) => {
        setTimeout(() => {
          this.setState({ isLoading: false, news: data });
        }, 2000);
      });
  }

  handleAddNews = (data) => {
    const { news } = this.state;
    const nextNews = [data, ...news];

    this.setState({ news: nextNews });
  };

  render() {
    const { news, isLoading } = this.state;

    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h1>Новости</h1>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(news) && <News data={news} />}
      </React.Fragment>
    );
  }
}
