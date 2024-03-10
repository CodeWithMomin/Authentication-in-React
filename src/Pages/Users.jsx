import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'
 const Users = () => {
  const [searchParam ,setParam]=useSearchParams();

  const showActiveUsers=searchParam.get('filter')==='active'
  
  return (
    <>
    <h2>user1</h2>
    <h2>user2</h2>
    <h2>user3</h2>
    <Outlet/>
    <div>
    <button onClick={()=>{
      setParam({filter:'active'})
    }}>
      Active Users
    </button>
    <button onClick={()=>{
      setParam({})
    }}>
      Reset
    </button>
    </div>
     
          {
          
            showActiveUsers ? <span>Showing Active Users</span>:
             <span>Showing All Users</span>
          }
      
    </>
  )
}
export default Users