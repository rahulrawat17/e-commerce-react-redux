import './App.css';
import Header from './component/layout/Header/Header';
// import { BrowserRouter as Router } from 'react-router-dom';
import WebFont from 'webfontloader';
import React from 'react';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import Navbar from './component/layout/NavBar';
import Profile from './component/User/Profile';
import UpdateProfile from './component/User/UpdateProfile';
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import ResetPassword from './component/User/ResetPassword';
import LoginSignUp from './component/User/LoginSignUp';
import { store } from './store'
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/Header/UserOptions';
import { useSelector } from 'react-redux';
import Cart from './component/Cart/Cart';
import Shipping from './component/Cart/Shipping';
import { ProtectedRoute } from './component/Route/ProtectedRoute.jsx';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import Payment from './component/Cart/Payment';
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders';

function App() {

  const { isAuthenticated, user } = useSelector(state => state.user)

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    });
    store.dispatch(loadUser())
  }, [])

  return (
    <>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/contact" element={<Contant />} /> */}
          {/* <Route path="/about" element={<Search />} /> */}

          <Route path="/account" element={<Profile />} />

          <Route
            path="/shipping"
            element={
              <ProtectedRoute>
                <Shipping />
              </ProtectedRoute>
            }
          />

          <Route
            path="/order/confirm"
            element={
              <ProtectedRoute>
                <ConfirmOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/process/payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <OrderSuccess />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <MyOrders />
              </ProtectedRoute>
            }
          />

          {/* <Route path="/me/update" element={<UpdateProfile />} /> */}
          {/* <Route path="/password/update" element={<UpdatePassword />} /> */}
          {/* <Route path="/password/forgot" element={<ForgotPassword />} /> */}
          {/* <Route path="/password/reset/:token" element={<ResetPassword />} /> */}
          <Route path="/login" element={<LoginSignUp />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
