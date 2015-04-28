var Book = React.createClass({

  render: function() {
    function generateOLReadLink(asin) {
      return {__html: '<div class="ol_readapi_book" isbn="'+asin+'"></div>'};
    }
    return (
      <div className="book">
        <p>
          <img src={"http://covers.openlibrary.org/b/isbn/"+this.props.asin+"-M.jpg"} />
        </p>
        <p>
          <strong>asin: </strong>
          <a href={"http://www.amazon.com/dp/"+this.props.asin}>{this.props.asin}</a>
        </p>
        <p>
          <strong>title: </strong>
          {this.props.title}
        </p>
        <p>
          <strong>author: </strong>
          {this.props.author}
        </p>
        <p>
          <strong>price: </strong>
          {this.props.price}
        </p>
        <span dangerouslySetInnerHTML={generateOLReadLink(this.props.asin)} />
      </div>
    );
  }
});
