import axios from "axios"
import { GET_PRODUCTS_SUCCESS, SEARCH_PRODUCTS } from ".././actions/types";

const fakeProductUrl = 'https://fakestoreapi.com/products';

export const getProducts = () => async dispatch => {

    await axios.get(fakeProductUrl)
        .then((result) => {
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: result.data
            });
        })
        .catch((ex) => {

        });
}

export const searchProducts = (searchTerm) => async dispatch => {
    dispatch({
        type: SEARCH_PRODUCTS,
        payload: searchTerm
    });
}