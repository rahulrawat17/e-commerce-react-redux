// import React from 'react'
import React, { Fragment, useEffect } from 'react'
import './Home.css'
import ProductCard from './ProductCard'
// import { CgMouse } from "react-icons/all";
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getProducts } from '../../actions/productAction'
import Loader from '../layout/Loader/Loader'
import { useAlert } from 'react-alert'

// const product = {
//   name: 'Blue Shirt',
//   images: [{ url: 'https://picsum.photos/200/300' }],
//   price: '400',
//   _id: 'rahul'
// }

const Home = () => {
  const alert = useAlert()
  const dispatch = useDispatch()

  const { loading, error, products, productsCount } = useSelector(
    state => state.products
  )
  
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProducts())
  }, [dispatch, error, alert])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title='ECOMMERCE' />
          <div className='banner'>
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href='#container'>
              <button>
                Scroll
                {/* Scroll <CgMouse /> */}
              </button>
            </a>
          </div>
          <h2 className='homeHeading'>Featured Products</h2>
          <div className='container' id='container'>
            {/* <ProductCard product={product} /> */}
            {products &&
              products.map((product, i) => {
                return <ProductCard key={i} product={product} />
              })}
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home
