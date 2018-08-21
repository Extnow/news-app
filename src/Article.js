import React from 'react';
import PropTypes from 'prop-types';

export default class Article extends React.Component {
  state = {
    visible: false,
  }

  handleReadMoreClick = (e) => {
    e.preventDefault();
    this.setState({ visible: true });
  }

  render() {
    const { data } = this.props;
    const { author, title, text } = data;

    const { visible } = this.state;

    return (
      <div className="article">
        <h1>{author}</h1>
        <p>{title}</p>
        {
          !visible && <a onClick={this.handleReadMoreClick} href="#readmore">подробнее</a>
        }
        {
          visible && <p>{text}</p>
        }
      </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};
