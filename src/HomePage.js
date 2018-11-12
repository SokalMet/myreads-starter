import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from "./BooksAPI"

import BookShelf from "./BookShelf"

class HomePage extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }

  changeShelf = (book, shelf) => {
    book.shelf = shelf

    BooksAPI.update(book, shelf).then(() => {
      this.setState(state => ({
        books: state.books
          .filter(b => b.id !== book.id)
          .concat([book])
      }))
    })
  }

  render() {
    const books = this.state.books
    const currentlyReading = books.filter(
      book => book.shelf === "currentlyReading"
    )
    const wantToRead = books.filter(
      book => book.shelf === "wantToRead"
    )
    const read = books.filter(
      book => book.shelf === "read"
    )

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {<BookShelf
            shelfName="Currently Reading"
            filteredBooks={currentlyReading}
            changeShelf={this.changeShelf}
          />}
          {<BookShelf
            shelfName="Want to read"
            filteredBooks={wantToRead}
            changeShelf={this.changeShelf}
          />}
          {<BookShelf
            shelfName="Read"
            filteredBooks={read}
            changeShelf={this.changeShelf}
          />}
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default HomePage