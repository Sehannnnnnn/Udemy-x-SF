import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const params = useParams();
  console.log(params.username)
  return (
    <div>
      <div>Profile</div>
      <div>{params.username}</div>
    </div>
  )
}

export default Profile