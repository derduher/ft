import { combineReducers } from 'redux'
import { productsById } from './reducers/products-by-id.js'
import productsJSON from './products.json'
const seriesById = {}
const productById = {}
const seriesTypes = [{ seriesId: '' }]
const productTypes = [{ prodTypeId: '' }]
productsJSON.documents.forEach(({ series, seriesId, productType, prodTypeId }) => {
  if (!seriesById[seriesId]) {
    seriesById[seriesId] = true
    seriesTypes.push({ seriesId, series })
  }
  if (!productById[prodTypeId]) {
    productById[prodTypeId] = true
    productTypes.push({ prodTypeId, productType })
  }
})
export const reducers = combineReducers({
  productsById,
  seriesTypes: (state = seriesTypes) => state,
  productTypes: (state = productTypes) => state,
  products: (state = productsJSON.documents) => state
})
