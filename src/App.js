import React, { Component } from 'react';
import MoviePage from './context/MoviePage'
import UserContext from './context/userContext';
import CartContext from './context/cartContex'
import Login from './context/Login'

class App extends Component {

  handleLoggedIn = (username) => {
    console.log("Getting the user: " + username)
    const user = { name: "Uniqcle" }
    this.setState({ currentUser: user })
  }

  state = {
    currentUser: { name: null }
  }

  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider value={
          //send object
          { currentUser: this.state.currentUser, onLoggedIn: this.handleLoggedIn }
        }>
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;