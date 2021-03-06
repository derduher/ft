import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from '../Products/products.js'
import Product from '../Product/product.js'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Products} />
          <Route path={process.env.PUBLIC_URL + '/product/:id'} component={Product} />
        </Switch>
      </Router>
    )
  }
}

export default App
