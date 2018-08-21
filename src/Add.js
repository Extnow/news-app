import React from 'react';
import PropTypes from 'prop-types';

export default class Add extends React.Component {
  state = {
    author: '',
    title: '',
    text: '',
    checkbox: false,
  };

  handleChange = (e) => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };

  handleCheckboxChange = (e) => {
    this.setState({ checkbox: e.currentTarget.checked });
  };

  onBtnClick = (e) => {
    e.preventDefault();

    const { onAddNews } = this.props;
    const { author, title, text } = this.state;

    onAddNews({
      id: +new Date(), author, title, text,
    });
  };

  validate = () => {
    const {
      author, title, text, checkbox,
    } = this.state;

    if (author.trim() && title.trim() && text.trim() && checkbox) {
      return true;
    }
    return false;
  };

  render() {
    const { author, title, text } = this.state;

    return (
      <React.Fragment>
        <form className="add">
          <input
            id="author"
            type="text"
            onChange={this.handleChange}
            className="add__author"
            placeholder="Ваше имя"
            value={author}
          />
          <textarea
            id="title"
            onChange={this.handleChange}
            className="add__text"
            placeholder="Заголовок новости"
            value={title}
          />
          <textarea
            id="text"
            onChange={this.handleChange}
            className="add__text"
            placeholder="Текст новости"
            value={text}
          />
          <label className="add__checkrule" htmlFor="rule-checkbox">
            <input id="rule-checkbox" onChange={this.handleCheckboxChange} type="checkbox" />Я
            согласен с правилами
          </label>
          <button
            className="add__btn"
            type="button"
            disabled={!this.validate()}
            onClick={this.onBtnClick}
          >
            Добавить новость
          </button>
        </form>
      </React.Fragment>
    );
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func,
}.isRequred;
