import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBook from "./SearchBook"
import HomePage from "./HomePage"

const BooksApp = () => {
  return (
    <div className="app" data-test="component-app">
      <Route path='/search' component={SearchBook}/>
      <Route exact path='/' component={HomePage}/>
    </div>
  )
}

export default BooksApp