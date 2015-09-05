import React from 'react'
import Wishlist from './Wishlist'

class App extends React.Component {
  render () {
    return (<Wishlist url="http://localhost:9393/wishlists/2/scrape" />)
  }
}

export default App;
