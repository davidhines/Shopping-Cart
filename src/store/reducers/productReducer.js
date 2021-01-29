import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS, SEARCH_PRODUCTS } from ".././actions/types";

const initialState = {
    products: [],
    filteredProducts: [],
    loading: true,
    cartQuantity: 0,
    error: null
};

const productsReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                filteredProducts: state.filteredProducts.length < 1 ? [...action.payload] : state.filteredProducts,
                loading: false
            };
        case GET_PRODUCTS_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: action.payload,
                products: [],
                filteredProducts: []
            }
        case SEARCH_PRODUCTS:
            return {
                ...state,
                filteredProducts: state.products.filter(product => product.title.toLowerCase().includes(action.payload.toLowerCase()))
            }            
        default:
            return state;
    }
}

export default productsReducer;