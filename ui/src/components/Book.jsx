import React from 'react'
import SuperAgent from 'superagent'
import JSONP from 'jsonp'

var Book = React.createClass({
  getInitialState: function() {
    return {OLRecords: []};
  },
  componentDidMount: function() {
    this.checkOpenLib();
  },
  checkOpenLib: function() {
    let ep = `http://openlibrary.org/api/volumes/brief/isbn/${this.props.asin}.json`;
    JSONP(ep, null, (err, data ) => {
      if (!err) {
        if (data['items'] && data['items'].length > 0) {
          this.setState({
            OLRecords: data['items']
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
