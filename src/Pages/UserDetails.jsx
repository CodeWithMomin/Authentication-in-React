import React from 'react'
import { useParams } from 'react-router-dom'
 const UserDetails = () => {
  const param=useParams();
  const userid=param.userid;
  return (
    <div>UserDetails {userid}</div>
  )
}
export default UserDetails
