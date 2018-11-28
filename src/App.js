import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app" data-test="component-app">
      </div>
    )
  }
}

export default BooksApp