import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

 const Nav = () => {
 const auth=useAuth(); //Login button will be SHowen if the User is not Logged in
  return (
    <>
    <nav className="primary-nav">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'> About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {!auth.user && (<NavLink to='login'>Login</NavLink>)}
    </nav>
    bu
    </>
  )
}
export default Nav
