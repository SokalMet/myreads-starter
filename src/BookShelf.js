import React from "react"
import Book from "./Book"

const BookShelf = function (props) {
  let booksShelfChange = (book, shelf) => {
    props.changeShelf(book, shelf);
  }
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.filteredBooks.length > 0 &&
          props.filteredBooks.map(book => (book.shelf !== "book_for_search" &&
            <li key={book.id}>
              <Book
                book={book}
                booksShelfChange={booksShelfChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf