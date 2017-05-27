import React from 'react'
import SuperAgent from 'superagent'
import BookList from './Booklist'

var Wishlist = React.createClass({
  loadBooksFromServer: function() {
    SuperAgent
      .get(this.props.url)
      .end((err, res) => {
        if (res.ok) {
          this.setState({data: res.body})
        } else {
          console.error(this.props.url, err)
        }
      })
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadBooksFromServer();
  },
  render: function() {
    return (
      <div className="wishlist">
        <h1>Books</h1>
        <BookList data={this.state.data}/>
      </div>
    );
  }
});

export default Wishlist
