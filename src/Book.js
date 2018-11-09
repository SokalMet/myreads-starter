import React from "react"

const Book = (props) => {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.filteredBooks.length > 0 &&
          props.filteredBooks.map(book => (book.shelf !== "do_not_show" &&
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 190,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}
                  />
                  <div className="book-shelf-changer">
                    <select
                      name="shelf"
                      value={book.shelf}
                      onChange={e => props.changeShelf(e, book)}
                    >
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
                  {book.title}
                </div>
                <div className="book-authors">
                  {book.authors ? book.authors.join(", ") : ""}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
}

export default Book