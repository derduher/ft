import React from 'react'
import { connect } from 'react-redux'

// <pre>{JSON.stringify(productsById[match.params.id], null, 2)}</pre>
export function Product ({ match, productsById }) {
  const {
    images,
    productDisplayName_en: name,
    bodyShape
  } = productsById[match.params.id]
  // ideally the source json would indicate with metadata the intended use
  const imgSrc = images.find(i => !i.match(/Zoom/)) || images[0]
  return <div className='product-page'>
    <img src={imgSrc} alt='primary product image' className='product-img' />
    <div>{ name || bodyShape || 'no name' }</div>
  </div>
}

function mapStateToProps ({ productsById }, ownProps) {
  return { productsById }
}
export default connect(mapStateToProps)(Product)
