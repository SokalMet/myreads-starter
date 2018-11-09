import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from "./BooksAPI"

import Book from "./Book"

class HomePage extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  changeShelf = (e, book) => {
    const books = this.state.books
    const shelf = e.target.value
    book.shelf = shelf
    this.setState({
      books
    })

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

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              {currentlyReading.length > 0 &&
              <Book
                filteredBooks={currentlyReading}
                changeShelf={this.changeShelf}
              />}
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              {wantToRead.length > 0 &&
              <Book
                filteredBooks={wantToRead}
                changeShelf={this.changeShelf}
              />}
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              {read.length > 0 &&
              <Book
                filteredBooks={read}
                changeShelf={this.changeShelf}
              />}
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default HomePage