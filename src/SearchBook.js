import React from "react"
import {Link} from "react-router-dom"
import Book from "./Book"

import * as BooksAPI from './BooksAPI'

class SearchBook extends React.Component {
  state = {
    enteredText: '',
    qureiedBooks: []
  }
  handleChange = (enteredText) => {
    this.setState(() => {return {enteredText: enteredText}})
    this.search_books(enteredText)
  }
  search_books = (serchText) => {
    if(serchText) {
      BooksAPI.search(serchText).then((books) => {
        if(books && books.length) {
          books = books.filter((book) => (book.imageLinks))
          this.setState(() => {
            return {qureiedBooks: books}
          })
        } else {
          debugger
          this.setState(() => {
            return {qureiedBooks: []}
          })
        }
      })
    } else {
      this.setState({qureiedBooks: [], enteredText: ''})
    }
  }
  changeBookShelf = (e, filteredBook) => {
    const books = this.state.qureiedBooks;
    const shelf = e.target.value;
    filteredBook.shelf = e.target.value;
    this.setState({
      books
    })

    BooksAPI.update(filteredBook, shelf).then(() => {
      this.setState(state => ({
        qureiedBooks: state.books
          .filter(b => b.id !== filteredBook.id)
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
            <input type="text" onChange={event => this.handleChange(event.target.value)} placeholder="Search by title or author" value={this.state.enteredText}/>

          </div>
        </div>
        <div className="search-books-results">
          <Book filteredBooks={this.state.qureiedBooks} changeShelf={this.changeBookShelf}/>
        </div>
      </div>
    )
  }
}

export default SearchBook
