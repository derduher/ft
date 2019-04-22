import productsJSON from '../products.json'
const initialState = productsJSON.documents.reduce((ac, product) => ({ ...ac, [product.productNo]: product }), {})
export function productsById (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
