import React,{useState} from 'react'
import { useAuth } from './Auth'
import { useNavigate ,useLocation} from 'react-router-dom'

 const Login = () => {
    const [user,setuser]=useState('')
    const auth=useAuth();
    const location=useLocation();
    const redirect= location.state?.path || '/'
    const navigate=useNavigate();
    const HandleLogin=()=>{
        // we need to call login function from Auth here
            auth.login(user)
            console.log(`Logged in${user}`);
            console.log(auth.user);
            navigate(redirect,{replace:true})
             /* if we click on back button after loging in it will refresh the page and we have 
    login again and again to over come this set {replace :true} */
    }
  return (
    <div>Login

        <input type="text" placeholder='Enter Your Username' onChange={(e)=>
            setuser(e.target.value)
        }/>
        <button onClick={HandleLogin}>Login</button>
    </div>
  )
}
export default Login