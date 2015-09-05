import React from 'react'
import SuperAgent from 'superagent'
import BookList from './Booklist'

var Wishlist = React.createClass({
  loadBooksFromServer: function() {
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   success: function(data){
    //     this.setState({data: data});
    //     ol_readapi_automator();
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
    SuperAgent
      .get(this.props.url)
      .end((err, res) => {
        console.log(err, res)
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
