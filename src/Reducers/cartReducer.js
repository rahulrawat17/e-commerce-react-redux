import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer({}, {
    addToCart: (state = { cartItems: [] }, action) => {
        const item = action.payload;
        const isItemExist = state.cartItems.find(
            i => i.product === item.product
        );
        if (isItemExist) {
            return {
                ...state,
                cartItems: state.cartItems.map(i => i.product === isItemExist.product ? item : i)
            }
        }
        else {
            return {
                ...state,
                cartItems: [...state.cartItems, item]
            }
        }
    },
    removeCartItem: (state, action) => {
        return {
            ...state,
            cartItems: state.cartItems.filter(i => i.product !== action.payload)
        }
    },
    saveShippingInfo: (state = { shippingInfo: {} }, action) => {
        return {
            ...state,
            shippingInfo: action.payload
        }
    },
    clearErrors: (state = { cartItems: [] }, action) => {
        return {
            ...state,
            error: null
        }
    },
})