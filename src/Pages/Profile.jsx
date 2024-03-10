import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom';
 const Profile = () => {
    // to display userName we need to import auth a and call it
   const auth=useAuth();
   const navigate=useNavigate();
   const HandleLogout=()=>{
    auth.logout();
    navigate('/')  
    console.log("Logged out successfully");
   }
    
  return (
    
   
    <div>Wellcome {auth.user}
        
        {/* now displaying the username of user we neww to import useAuth angain */}
        <button onClick={ HandleLogout}> Logout</button>
    </div>
    
   
  )
}
 
export default Profile