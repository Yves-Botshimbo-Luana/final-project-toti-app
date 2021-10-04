import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer,

});
export default reducers;
