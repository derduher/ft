import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

function ProductItem ({
  productNo,
  images,
  productDisplayName_en,
  bodyShape
}) {
  return <li className='product' key={productNo}>
    <Link to={process.env.PUBLIC_URL + '/product/' + productNo} className='product__img'><img key={productNo + images[0]} src={images[0]} /></Link>
    <Link to={process.env.PUBLIC_URL + '/product/' + productNo} className='product__name'>{ productDisplayName_en || bodyShape || 'no name' }</Link>
  </li>
}

export class Products extends Component {
  state = {
    series: '',
    productType: ''
  }
  onSeriesFilterChange = e => this.setState({series: e.target.value})
  onProductFilterChange = e => this.setState({productType: e.target.value})
  activeProducts () {
    return this.props.products.filter(doc =>
      (!this.state.series || doc.seriesId === this.state.series)
      && (!this.state.productType || doc.prodTypeId === this.state.productType))
  }

  render () {
    const activeProducts = this.activeProducts()
    const {
      seriesTypes,
      productTypes
    } = this.props
    return (
      <div className='products-container'>
        <div className='sidebar'>
          <label htmlFor='seriesFilter'>Series Type</label>
          <select id='seriesFilter' onChange={this.onSeriesFilterChange}>
            {
              seriesTypes.map(({seriesId, series}) => <option key={seriesId} value={seriesId}>{series}</option>)
            }
          </select>
          <label htmlFor='productFilter'>Product Type</label>
          <select id='productFilter' onChange={this.onProductFilterChange}>
            {
              productTypes.map(({prodTypeId, productType}) => <option key={prodTypeId} value={prodTypeId}>{productType}</option>)
            }
          </select>
        </div>
        <ul className='products'>
          {
            activeProducts.map(ProductItem)
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ seriesTypes, productTypes, products }, ownProps) {
  return { seriesTypes, productTypes, products }
}

export default connect(mapStateToProps)(Products)
