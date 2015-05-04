var Book = React.createClass({

  render: function() {
    function generateOLReadLink(asin) {
      return {__html: '<div class="ol_readapi_book" isbn="'+asin+'"></div>'};
    }
    return (
      <div className="book">
        <div className="pull-left">
          <p>
            <img className="bookCover pull-left" src={"http://covers.openlibrary.org/b/isbn/"+this.props.asin+"-M.jpg"} alt="book cover art courtesy of openlibrary"/>
          </p>
        </div>
        <div className="pull-right">
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
          {/*<p>
            <strong>price: </strong>
            {this.props.price}
          </p>*/}
          <p>
            <strong>open lib: </strong>
            <span dangerouslySetInnerHTML={generateOLReadLink(this.props.asin)} />
          </p>
        </div>
      </div>
    );
  }
});
