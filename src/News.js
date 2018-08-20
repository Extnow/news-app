import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

export default class News extends React.Component {
  renderNews = () => {
    const { data } = this.props;
    let newsTemplate;

    if (data.length) {
      newsTemplate = data.map(item => <Article key={item.id} data={item} />);
    } else {
      newsTemplate = <p>Новостей нет</p>;
    }

    return newsTemplate;
  };

  render() {
    const { data } = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {data.length ? (
          <strong>Всего новостей: {data.length}</strong>
        ) : null}
        <br />
      </div>
    );
  }
}

News.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};
