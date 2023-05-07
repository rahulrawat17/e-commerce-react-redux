import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//     c: 0
// }

export const productReducer = createReducer({}, {
    allProductRequest: (state = { products: [] }, action) => {
        return {
            loading: true,
            products: []
        }
        // state.c += 1;
    },
    allProductSuccess: (state = { products: [] }, action) => {
        return {
            loading: false,
            products: action.payload.products,
            productsCount: action.payload.productsCount
        }
    },
    allProductFail: (state = { products: [] }, action) => {
        return {
            loading: false,
            error: action.payload
        }
    },
    clearErrors: (state = { products: [] }, action) => {
        return {
            ...state,
            error: null
        }
    },
})

export const productDetailsReducer = createReducer({}, {
    productDetailsRequest: (state = { product: {} }, action) => {
        return {
            loading: true,
            ...state
        }
        // state.c += 1;
    },
    productDetailsSuccess: (state = { product: {} }, action) => {
        return {
            loading: false,
            product: action.payload,
        }
    },
    productDetailsFail: (state = { product: {} }, action) => {
        return {
            loading: false,
            error: action.payload
        }
    },
    clearErrors: (state = { products: [] }, action) => {
        return {
            ...state,
            error: null
        }
    },
})