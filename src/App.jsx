import React from 'react'
import AuthProvider from './Pages/Auth'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
//import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Nav from './Pages/Nav'
import Products from './Pages/Products'
import FeaturedProducts from './Pages/FeaturedProducts'
import NewProducts from './Pages/NewProducts'
import Users from './Pages/Users'
import UserDetails from './Pages/UserDetails'
import Admin from './Pages/Admin'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import RequireAuth  from './Pages/RequireAuth'


//import Login from './Pages/Login'
const LazyAbout=React.lazy(()=>import('./Pages/About'))
 const App = () => {
  return (
    <>
   <AuthProvider>
    
   <Nav/>
   <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<React.Suspense fallback='Loading....'>
    <LazyAbout/>
    </React.Suspense>}/>
    <Route path='products' element={<Products/>}>
      <Route index element={<FeaturedProducts/>}/>
    <Route path='featured' element={<FeaturedProducts/>}/>
    <Route path='new' element={<NewProducts/>}/>

    </Route>
    <Route path='users' element={<Users/>}>
    <Route path=':userid' element={<UserDetails/>}/>
    <Route path='admin' element={<Admin/>}/>
   </Route>
   <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='*' element={<NotFound/>} />
   </Routes>
   </AuthProvider>
   </>
   
  )
}
export default App
