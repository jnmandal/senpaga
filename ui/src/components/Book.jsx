import React from 'react'
import JSONP from 'jsonp'

var Book = React.createClass({
  getInitialState: function() {
    return {OLRecords: []};
  },
  componentDidMount: function() {
    this.checkOpenLib();
  },
  checkOpenLib: function() {
    let ep = `http://openlibrary.org/api/volumes/brief/json/${this.props.asin}`;
    JSONP(ep, null, (err, data ) => {
      if (!err) {
        if (data[this.props.asin]['items'] && data[this.props.asin]['items'].length > 0) {
          console.log(data[this.props.asin]['items'])
          this.setState({
            OLRecords: data[this.props.asin]['items']
          })
        } else {
          return false;
        }
      }
    })
  },
  render: function() {
    let OLRecords = this.state.OLRecords.map((record)=>{
      return (<li><a href={record.itemURL}>{record.status}</a></li>);
    });
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
          <p>
            <strong>open lib ebook: </strong>
            <ul>
              {OLRecords}
            </ul>
          </p>
          <p>
            <strong>nearby libraries: </strong>
            <a href={"http://www.worldcat.org/isbn/"+this.props.asin}>check at worldcat</a>
          </p>
        </div>
      </div>
    );
  }
});

export default Book;
