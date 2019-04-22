import React from 'react'
import { connect } from 'react-redux'
export function Product ({ match, productsById }) {
  return <pre>{JSON.stringify(productsById[match.params.id], null, 2)}</pre>
}

function mapStateToProps ({ productsById }, ownProps) {
  return { productsById }
}
export default connect(mapStateToProps)(Product)
