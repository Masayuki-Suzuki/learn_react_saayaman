import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TopPage from './components/TopPage/TopPage'

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopPage />
        <Footer />
      </div>
    )
  }
}

export default App
