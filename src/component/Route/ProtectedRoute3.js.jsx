// import React, { Fragment } from 'react'
// import { useSelector } from 'react-redux'
// import { Link, Route } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
// // Navigate

// const ProtectedRoute = ({ ...rest }) => {
//   // const { loading, isAuthenticated, user } = useSelector(state => state.user)

//   const auth = false

//   return (
//     <Fragment>
//       {/* {loading === false && (
//         <Route
//           {...rest}
//           render={props => {
//             if (isAuthenticated === false) {
//               return <Link to='/login' />
//             }
//             if (isAdmin === true && user.role !== 'admin') {
//               return <Link to='/login' />
//             }
//             return <Component {...props} />
//           }}
//         />
//       )} */}
//       auth ? <Outlet /> : <Link to='/login' />;
//     </Fragment>
//   )
// }

// export default ProtectedRoute
