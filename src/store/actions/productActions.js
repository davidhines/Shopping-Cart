import axios from "axios"
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS, SEARCH_PRODUCTS } from ".././actions/types";


export const getProducts = () => async dispatch => {
    
    try {
        let result = await axios.get('https://fakestoreapi.com/products');
        
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: result.data
        });
    }
    catch(exception) {
        dispatch({
            type: GET_PRODUCTS_FAILURE,
            payload: exception
        });
    }
}

export const searchProducts = (searchTerm) => async dispatch => {
    dispatch({
        type: SEARCH_PRODUCTS,
        payload: searchTerm
    });
}