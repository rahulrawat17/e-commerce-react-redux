import { createReducer } from "@reduxjs/toolkit";

export const newOrderReducer = createReducer({}, {
    createOrderRequest: (state = {}, action) => {
        return {
            ...state,
            loading: true,
        }
    },
    createOrderSuccess: (state = {}, action) => {
        return {
            ...state,
            loading: false,
            order: action.payload
        }
    },
    createOrderFail: (state = {}, action) => {
        return {
            ...state,
            loading: true,
            order: action.payload
        }
    },
    clearErrors: (state = {}, action) => {
        return {
            ...state,
            error: null
        }
    },
})

export const myOrdersReducer = createReducer({}, {
    myOrdersRequest: (state = {orders: []}, action) => {
        return {
            loading: true,
        }
    },
    myOrdersSuccess: (state = {}, action) => {
        return {
            ...state,
            loading: false,
            orders: action.payload
        }
    },
    myOrdersFail: (state = {}, action) => {
        return {
            ...state,
            loading: true,
            orders: action.payload
        }
    },
    clearErrors: (state = {}, action) => {
        return {
            ...state,
            error: null
        }
    },
})