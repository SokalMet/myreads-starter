import React from "react"
import {Link} from "react-router-dom"
import BookShelf from "./BookShelf"

import * as BooksAPI from './BooksAPI'

class SearchBook extends React.Component {
  state = {
    enteredText: '',
    queriedBooks: [],
    myBooks: []
  }
  componentDidMount() {
    BooksAPI.getAll().then(myBooks => {
      this.setState({ myBooks })
    })
  }
  handleChange = (enteredText) => {
    this.setState(() => {return {enteredText: enteredText}})
    this.search_books(enteredText)
  }
  search_books = (serchText) => {
    if(serchText) {
      BooksAPI.search(serchText).then((books) => {
        if(books && books.length) {
          books = books.map(book => {
            book.shelf = this.addShelf(book)
            return book
          })

          this.setState(() => {
            return {queriedBooks: books}
          })
        } else {
          this.setState(() => {
            return {queriedBooks: []}
          })
        }
      })
    } else {
      this.setState({queriedBooks: [], enteredText: ''})
    }
  }
  addShelf(book) {
    let hasShelf = this.state.myBooks.filter(myBook => myBook.id === book.id)
    return hasShelf.length ? "do_not_show" : "noneShelf"
  }
  changeShelf = (filteredBook, shelf) => {
    filteredBook.shelf = shelf

    BooksAPI.update(filteredBook, shelf).then(() => {
      this.setState(state => ({
        queriedBooks: state.queriedBooks
          .filter(book => book.id !== filteredBook.id)
      }))
    })
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" onChange={event => this.handleChange(event.target.value)}
                   placeholder="Search by title or author" value={this.state.enteredText}/>

          </div>
        </div>
        <div className="search-books-results">
          <BookShelf filteredBooks={this.state.queriedBooks} changeShelf={this.changeShelf}/>
        </div>
      </div>
    )
  }
}

export default SearchBook
