import React from "react";
import {Link} from "react-router-dom";

class SearchBook extends React.Component {
  state = {
    enteredText: ''
  }
  handleChange = (enteredText) => {
    let text = enteredText.target.value
    this.setState(() => {return {enteredText: text}})
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
            <input type="text" onChange={this.handleChange} placeholder="Search by title or author" value={this.state.enteredText}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook
