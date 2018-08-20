import React from 'react';

export default class Add extends React.Component {
  state = {
    author: '',
    text: '',
    checkbox: false,
  };

  handleChange = (e) => {
    const { id } = e.currentTarget;
    this.setState({ [id]: e.currentTarget.value });
  };

  handleCheckboxChange = (e) => {
    this.setState({ checkbox: e.currentTarget.checked });
  };

  onBtnClick = (e) => {
    const { author, text } = this.state;

    e.preventDefault();
    alert(`${author}\n${text}`);
  };

  validate = () => {
    const { author, text, checkbox } = this.state;

    if (author.trim() && text.trim() && checkbox) {
      return true;
    }
    return false;
  };

  render() {
    const { author, text } = this.state;

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
            Показать alert
          </button>
        </form>
      </React.Fragment>
    );
  }
}
