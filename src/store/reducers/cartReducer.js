import { ADD_TO_CART, CHECKOUT, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART, UPDATE_PRODUCT_QUANTITY } from ".././actions/types";

const initialState = {
    cartItems: [],
    error: null
};

const addDistinct = (items, item) => {
    let index = items.findIndex(i => i.id === item.id);

    if (index === -1) {
        item.quantity = 1;
        items.push(item);
    }
}

const updateQuantity = (product, action) => {
    switch(action.payload.action) {
        case INCREMENT_QUANTITY:
            return ++product.quantity;
        case DECREMENT_QUANTITY:
            return --product.quantity;
        default:
            return product.quantity;
    }
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:            
            addDistinct(state.cartItems, action.payload);
            return {
                ...state,
                cartItems: state.cartItems
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.id !== action.payload.id)
            }
        case UPDATE_PRODUCT_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.payload.product.id ?
                    { ...item, quantity: updateQuantity(action.payload.product, action) } : item
                )
            }
        case CHECKOUT:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
};

export default cartReducer;