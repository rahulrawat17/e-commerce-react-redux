import axios from "axios";

// 
export const getProducts = (keyword = "") => async (dispatch) => {
    try {
        dispatch({ type: "allProductRequest" });
        // const {data} = await axios.get("/api/v1/products");
        // let link = `/api/v1/products?keyword=${keyword}`
        // const {data} = await axios.get(link);
        const data = {
            products: [{
                name: 'Blue Shirt',
                images: [{ url: 'https://picsum.photos/200/300' }],
                price: '400',
                _id: '101',
                ratings: 0,
                numOfReviews: 0
            }, {
                name: 'Red Pant',
                images: [{ url: 'https://picsum.photos/200/300' }],
                price: '500',
                _id: '102',
                ratings: 0,
                numOfReviews: 0
            },
            {
                name: 'Yellow Tee',
                images: [{ url: 'https://picsum.photos/200/300' }],
                price: '200',
                _id: '103',
                ratings: 0,
                numOfReviews: 0
            },
            {
                name: 'Orange Hoody',
                images: [{ url: 'https://picsum.photos/200/300' }],
                price: '820',
                _id: '104',
                ratings: 0,
                numOfReviews: 0
            }], productsCount: 4
        }
        const data2 = {
            products: [{
                name: 'Blue Shirt',
                images: [{ url: 'https://picsum.photos/200/300' }],
                price: '400',
                _id: '101',
                ratings: 0,
                numOfReviews: 0
            }, {
                name: 'Red Pant',
                images: [{ url: 'https://picsum.photos/200/300' }],
                price: '500',
                _id: '102',
                ratings: 0,
                numOfReviews: 0
            },
            ], productsCount: 2
        }
        if (keyword != '') {
            dispatch({
                type: "allProductSuccess",
                payload: data2
            })

        }
        else {
            dispatch({
                type: "allProductSuccess",
                payload: data
            })

        }
    } catch (error) {
        dispatch({
            type: "allProductFail",
            payload: "failed"
            // payload: error.response.data.message
        })
    }
}

// 
export const getProductDetails = (id) => async (dispatch) => {
    console.log("getProductDetails");
    try {
        dispatch({ type: "productDetailsRequest" });
        // const {data} = await axios.get(`/api/v1/product/${id}`);
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
            type: "productDetailsSuccess",
            payload: data.product
        })
    } catch (error) {
        dispatch({
            type: "productDetailsFail",
            payload: "failed"
            // payload: error.response.data.message
        })
    }
}

// 
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: "clearErrors"
    })
}