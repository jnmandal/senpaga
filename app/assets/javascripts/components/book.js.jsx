var Book = React.createClass({

  render: function() {
    return (
      <tr className="book">
        <td>{this.props.asin}</td>
        <td>{this.props.title}</td>
        <td>{this.props.author}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
});
