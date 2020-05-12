import React from 'react'
import { Link } from 'react-router-dom'  
import Head from './head'


const Main = () => {
  return (
    <div>
      <div с id="title">Main</div> 
      <Link to="/dashboard/profile/0355a3e9-4149-4e5d-b3a0-46e25687b070">Go To Profile</Link>
      <Link to="/dashboard/">Go To Root</Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
