import React, { Component } from 'react'
import './App.css'
import products from './products.json'
const seriesById = {}
const productById = {}
const seriesTypes = [{seriesId: ''}]
const productTypes = [{prodTypeId: ''}]
products.documents.forEach(({series, seriesId, productType, prodTypeId}) => {
  if (!seriesById[seriesId]) {
    seriesById[seriesId] = true
    seriesTypes.push({seriesId, series})
  }
  if (!productById[prodTypeId]) {
    productById[prodTypeId] = true
    productTypes.push({prodTypeId, productType})
  }
})

class App extends Component {
  state = {
    series: '',
    productType: ''
  }
  onSeriesFilterChange = e => this.setState({series: e.target.value})
  onProductFilterChange = e => this.setState({productType: e.target.value})
  activeProducts () {
    return products.documents.filter(doc => 
      (!this.state.series || doc.seriesId === this.state.series)
      && (!this.state.productType || doc.prodTypeId === this.state.productType))
  }
  render () {
    const activeProducts = this.activeProducts()
    return (
      <div className='App'>
        <span>{activeProducts.length}</span>
        <select onChange={this.onSeriesFilterChange}>
          {
            seriesTypes.map(({seriesId, series}) => <option key={seriesId} value={seriesId}>{series}</option>)
          }
        </select>
        <select onChange={this.onProductFilterChange}>
          {
            productTypes.map(({prodTypeId, productType}) => <option key={prodTypeId} value={prodTypeId}>{productType}</option>)
          }
        </select>
        <ul className='products'>
          {
            activeProducts.map(doc => {
              const uniq = Array.from(new Set(doc.images))
              return <li className='product' key={doc.productNo}>{
                uniq.map(i => <img key={doc.productNo + i} src={i} />)
              }<span className='product__name'>{ doc.productDisplayName_en }</span>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default App
