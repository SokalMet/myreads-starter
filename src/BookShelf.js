import React from "react"
import Book from "./Book"

const BookShelf = function (props) {
  let booksShelfChange = (book, shelf) => {
    props.changeShelf(book, shelf);
  }
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.filteredBooks.length > 0 &&
        props.filteredBooks.map(book => (book.shelf !== "do_not_show" &&
          <li key={book.id}>
            <Book
              book={book}
              booksShelfChange={booksShelfChange}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default BookShelf