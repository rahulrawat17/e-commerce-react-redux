import axios from "axios";

// 
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "loginRequest"
        })
        let link = `/api/v1/login`
        const config = { header: { "Content-Type": "application/json" } }
        // const {data} = await axios.post(link, {email, password}, config);
        const data = {
            avatar: '',
            role: "admin",
            _id: '151',
            name: 'rahul',
            email: 'rhitng@gmail.com',
            password: '123'
        }

        dispatch({
            type: "loginSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "loginFail",
            payload: "login failed"
            // payload: error.response.data.message
        })
    }
}

// 
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: "registerUserRequest"
        })
        let link = `/api/v1/register`
        const config = { header: { "Content-Type": "multipart/form-data" } }
        // const {data} = await axios.post(link, userData, config);
        dispatch({
            type: "registerUserSuccess",
            // payload: data.user
        })
    } catch (error) {
        dispatch({
            type: "registerUserFail",
            // payload: error.response.data.message
            payload: "error"
        })
    }
}

// 
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "loadUserRequest"
        })
        let link = `/api/v1/me`
        // const config = { header: {"Content-Type": "application/json"} }
        // const {data} = await axios.get(link);
        const data = {
            avatar: '',
            role: "admin",
            _id: '151',
            name: 'rahul',
            email: 'rhitng@gmail.com',
            password: '123'
        }

        dispatch({
            type: "loadUserSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "loadUserFail",
            payload: "laod user failed"
            // payload: error.response.data.message
        })
    }
}

// 
export const logout = () => async (dispatch) => {
    try {
        // await axios.get(`/api/v1/logout`)
        dispatch({ type: 'logoutSuccess' })
    } catch (error) {
        dispatch({
            type: 'logoutFail',
            // payload: error.response.data.message
            payload: 'error'
        })
    }
}

// 
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: "clearErrors"
    })
}