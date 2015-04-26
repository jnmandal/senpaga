var Book = React.createClass({

  render: function() {
    return (
      <div className="book">
        <p>
          <strong>asin: </strong>
          {this.props.asin}
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
      </div>
    );
  }
});
