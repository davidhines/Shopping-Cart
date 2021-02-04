import { 
    ADD_TO_CART, 
    CHECKOUT, 
    REMOVE_FROM_CART, 
    UPDATE_PRODUCT_QUANTITY
} from ".././actions/types";

export const addToCart = product => async dispatch => {    
    dispatch({
        type: ADD_TO_CART,
        payload: product
    });
}

export const checkout = () => async dispatch => {    
    dispatch({
        type: CHECKOUT
    });
}

export const removeFromCart = product => async dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: product
    });
}

export const updateQuantity = (product, action) => async dispatch => {
    dispatch({
        type: UPDATE_PRODUCT_QUANTITY,
        payload: {
            product,
            action
        }
    });
}