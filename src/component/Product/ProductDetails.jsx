import React, { useState, Fragment } from 'react'
import Carousel from 'react-material-ui-carousel'
import './ProductDetails.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, getProductDetails } from '../../actions/productAction'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import ReviewCard from './ReviewCard'
import Loader from '../layout/Loader/Loader'
import { useAlert } from 'react-alert'
import { addItemsToCart } from '../../actions/cartAction'

const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const alert = useAlert()

  //   const ttt = useSelector(state => state.productDetails)
  //   console.log("ttt", ttt);

  const { product, loading, error } = useSelector(state => state.productDetails)
  const options = product && {
    value: product.ratings,
    readOnly: true,
    precision: 0.5
  }

  const [quantity, setQuantity] = useState(1)
  const increaseQuantity = () => {
    if (product.Stock <= quantity) return
    const qty = quantity + 1
    setQuantity(qty)
  }

  const decreaseQuantity = () => {
    if(quantity <= 1) return;
    const qty = quantity - 1
    setQuantity(qty)
  }

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity))
    alert.success("Item Added to Cart")
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProductDetails(id))
  }, [dispatch, id, error, alert])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className='ProductDetails'>
            <div>
              <Carousel>
                {product &&
                  product.images &&
                  product.images.map((item, i) => (
                    <img
                      className='CarouselImage'
                      key={item.url}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div>
              {product && (
                <>
                  <div className='detailsBlock-1'>
                    <h2>{product.name}</h2>
                    <p>Product # {product._id}</p>
                  </div>
                  <div className='detailsBlock-2'>
                    <ReactStars {...options} />
                    <span>({product.numOfReviews} Reviews)</span>
                  </div>
                  <div className='detailsBlock-3'>
                    <h1>{`Rs. ${product.price}`}</h1>
                    <div className='detailsBlock-3-1'>
                      <div className='detailsBlock-3-1-1'>
                        <button onClick={decreaseQuantity}>-</button>
                        <input readOnly type='number' value={quantity} />
                        <button onClick={increaseQuantity}>+</button>
                      </div>
                      <button
                      // disabled={product.Stock < 1 ? true : false}
                      onClick={addToCartHandler}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <p>
                      Status:
                      <b
                        className={
                          product.Stock < 1 ? 'redColor' : 'greenColor'
                        }
                      >
                        {product.Stock < 1 ? 'OutOfStock' : 'InStock'}
                      </b>
                    </p>
                  </div>
                  <div className='detailsBlock-4'>
                    Description : <p>{product.description}</p>
                  </div>

                  <button
                    // onClick={submitReviewToggle}
                    className='submitReview'
                  >
                    Submit Review
                  </button>
                </>
              )}
            </div>
          </div>
          <h3 className='reviewsHeading'>REVIEWS</h3>
          {product && product.reviews && product.reviews[0] ? (
            <div className='reviews'>
              {product.reviews &&
                product.reviews.map(review => (
                  // <ReviewCard key={review._id} review={review} />
                  <ReviewCard />
                ))}
            </div>
          ) : (
            <p className='noReviews'>No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

export default ProductDetails
