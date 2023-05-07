import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, {
    loginRegister: (state = { user: {} }, action) => {
        return {
            loading: true,
            isAuthenticated: false
        }
    },
    registerUserRequest: (state = { user: {} }, action) => {
        return {
            loading: true,
            isAuthenticated: false
        }
    },
    loadUserRequest: (state = { user: {} }, action) => {
        return {
            loading: true,
            isAuthenticated: false
        }
    },
    loginSuccess: (state = { user: {} }, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user: action.payload
        }
    },
    registerUserSuccess: (state = { user: {} }, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user: action.payload
        }
    },
    loadUserSuccess: (state = { user: {} }, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user: action.payload
        }
    },
    logoutSuccess: (state = { user: {} }, action) => {
        return {
            loading: false,
            isAuthenticated: false,
            user: null
        }
    },
    loginFail: (state = { user: {} }, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload
        }
    },
    registerUserFail: (state = { user: {} }, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload
        }
    },
    loadUserFail: (state = { user: {} }, action) => {
        return {
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload
        }
    },
    logoutFail: (state = { user: {} }, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload
        }
    },
    clearErrors: (state = { user: {} }, action) => {
        return {
            ...state,
            error: null
        }
    },
})
