import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ data }) => (
  <div className="article">
    <h1>{data.author}</h1>
    <p>{data.title}</p>
  </div>
);

Article.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Article;
