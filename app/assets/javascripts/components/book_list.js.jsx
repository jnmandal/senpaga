var BookList = React.createClass({
  render: function() {
    var bookNodes = this.props.data.map(function (book) {
        return (
          <Book asin={book.asin} title={book.title} author={book.author} price={book.price} />
        );
    });
    return (
      <div className="bookList">
        {bookNodes}
      </div>
    );
  }
});
