import React, { Children } from 'react'
import { useAuth } from './Auth'
import { NavLink, Navigate ,useLocation} from 'react-router-dom';

 const RequireAuth = ({children}) => {
    const auth=useAuth();
    const location=useLocation();
    if(!auth.user)
    {
        return <Navigate to='/login' state={{path: location.pathname}}/>  //uselocation is used to send the user on profile page 
    } // after this go to app.jsx and wrap profile into Require Auth
  return children
}
export default RequireAuth
// in this component we are protecting the Profile Page from user Who is not logged in