import React from 'react'
import Wishlist from './Wishlist'

class App extends React.Component {
  render () {
    return (<Wishlist url="https://senpaga-dev.herokuapp.com/wishlists/2" />)
  }
}

export default App;
