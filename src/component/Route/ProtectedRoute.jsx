import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated, user } = useSelector(state => state.user)
  // console.log("children", children);
  const auth = true

  return loading === false ? isAuthenticated ? children : <Navigate to='/login' /> : ''
}
