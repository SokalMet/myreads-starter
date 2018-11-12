import React, { Component } from 'react';

class Book extends Component {
  booksShelfChange = (e) => {
    let shelf = e.target.value;
    let currentBook = this.props.book;
    this.props.booksShelfChange(currentBook, shelf)
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 190,
              backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select name="shelf" value={this.props.book.shelf} onChange={this.booksShelfChange}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">
                Currently Reading
              </option>
              <option value="wantToRead">
                Want to Read
              </option>
              <option value="read">Read</option>
              <option value="noneShelf">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">
          {this.props.book.title}
        </div>
        <div className="book-authors">
          {this.props.book.authors ? this.props.book.authors.join(", ") : ""}
        </div>
      </div>
    )
  }
}

export default Book