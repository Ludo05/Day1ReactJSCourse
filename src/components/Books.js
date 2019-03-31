import React, {Component} from 'react'
import books from '../mocks/books'
import { BookList } from './BooksList'
import { BooksFilter } from './BooksFilter'


export class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: books,
      selectedFilter: 'All',

    }
  }

  selectFilter = filter => {
    this.setState({
      selectedFilter: filter,
      books:
        filter === 'All'
          ? books
          : books.filter(book => book.category === filter)
    })
  }

  render() {
    const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']
    const tabItems = filters.map(filter => (
      <li
        className={filter === this.state.selectedFilter ? 'active' : ''}
        key={filter}
        onClick={() => this.selectFilter(filter)}
      >
        <a href="#0">{filter}</a>
      </li>
    ))
    return (
      <>
      <BooksFilter tabItems={tabItems}/>
      <BookList books={this.state.books}/>
      </>
    )
  }
}