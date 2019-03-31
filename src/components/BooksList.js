import React from 'react'
import Book from './Book'

export const BookList = props => (
  <div className="row book-list">
    {props.books.map(book => (
     <Book book={book}/>
    ))}
  </div>
)