import React from 'react'
import Book from './Book'

var BookList = React.createClass({
  rowify: function(bookNodes) {
    var rows = []
    for (var i=1; i <= bookNodes.length; i++) {
      if (i % 3 === 0) {
        var books = bookNodes.slice((i-3), i)
        rows.push (
          <div className="row">
            <div className="col-xs-4">
              {books[0]}
            </div>
            <div className="col-xs-4">
              {books[1]}
            </div>
            <div className="col-xs-4">
              {books[2]}
            </div>
          </div>
        );
      }
    }
    return rows;
  },
  render: function() {
    var bookNodes = this.props.data.map(function (book) {
        return (
          <Book asin={book.asin} title={book.title} author={book.author} price={book.price} />
        );
    });
    return (
      <div className="bookList">
        {this.rowify(bookNodes)}
      </div>
    );
  }
});

export default BookList;
