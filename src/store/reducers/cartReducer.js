import { ADD_TO_CART, CHECKOUT, REMOVE_FROM_CART, UPDATE_PRODUCT_QUANTITY } from ".././actions/types";

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

const updateItem = (items, item) => {
    let index = items.findIndex(i => i.id === item.id);

    if (index !== -1) {
        items[index] = item;
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
                cartItems: state.cartItems.map(item => item.id === action.payload.id ?
                    { ...item, quantity: action.payload.quantity } :
                    item
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