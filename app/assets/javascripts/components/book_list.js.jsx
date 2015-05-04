var BookList = React.createClass({
  render: function() {
    var bookNodes = this.props.data.map(function (book) {
        return (
          <Book asin={book.asin} title={book.title} author={book.author} price={book.price} />
        );
    });

    function rowify (bookNodes) {
      rows = []
      for (i=1; i <= bookNodes.length; i++) {
        if (i % 3 === 0) {
          books = bookNodes.slice((i-3), i)
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
    }

    return (
      <div className="bookList">
        {rowify(bookNodes)}
      </div>
    );
  }
});
