import axios from "axios";

// 
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {

    // const {data} = await axios.get(`/api/v1/product/${id}`)
    const data = {
        product: {
            _id: '101',
            name: 'Blue Shirt',
            ratings: '4',
            // rating: '0',
            numOfReviews: '0',
            Stock: 5,
            price: 400,
            description: 'test description',
            category: 'clothing',
            images: [{ url: 'https://picsum.photos/id/237/200/300' }, { url: 'https://picsum.photos/200/300' }, { url: 'https://picsum.photos/id/237/200/300' }],
            reviews: [],
            createdAt: '2021-05-08'
        }
    }
    dispatch({
        type: "addToCart",
        payload: {
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].url,
            stock: data.product.Stock,
            quantity
        }
    })
    // to store cart value in localstorage
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

// remove items from cart
export const removeItemsFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: "removeCartItem",
        payload: id,
    })
    // to store cart value in localstorage
    // console.log("getState().cart.cartItems)", getState().cart.cartItems);
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

// save shiping info
export const saveShippingInfo = (data) => async (dispatch) => {

    dispatch({
        type: "saveShippingInfo",
        payload: data,
    })
    localStorage.setItem("shippingInfo", JSON.stringify(data));
}