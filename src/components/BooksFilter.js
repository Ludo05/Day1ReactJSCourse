import React from 'react'

export const BooksFilter = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2>Books</h2>
        <hr className="star-primary" />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <ul className="nav nav-pills text-center">{props.tabItems}</ul>
      </div>
    </div>
  </div>
)

