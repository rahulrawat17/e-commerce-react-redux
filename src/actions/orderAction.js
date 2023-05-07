import axios from "axios";

// 
export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: "createOrderRequest"
        })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        // const {data} = await axios.get(`/api/v1/order/new`, order, config)
        const data = {
            product: {}
        }
        dispatch({
            type: "createOrderSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "createOrderFail",
            payload: "error",
            // payload: error.response.data.message
        })
    }
}

// get my orders
export const myOrders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: "myOrdersRequest"
        })
        // const {data} = await axios.get(`/api/v1/orders/me`)
        const data = {
            orders: [{
                _id: '123',
                orderItems: '2',
                orderStatus: 'Pending',
                totalPrice: '200'
            }, {
                _id: '124',
                orderItems: '4',
                orderStatus: 'Delivered',
                totalPrice: '500'
            }]
        }
        dispatch({
            type: "myOrdersSuccess",
            payload: data.orders
        })
    } catch (error) {
        dispatch({
            type: "myOrdersFail",
            payload: "error",
            // payload: error.response.data.message
        })
    }
}


// clear
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: "clearErrors"
    })
}