import React from 'react'
import { Link } from 'react-router-dom'  
import Head from './head'


const Dashboard = () => {
  return (
    <div>
      <div с id="title">Dashboard</div> 
      <Link to="/dashboard/profile/0355a3e9-4149-4e5d-b3a0-46e25687b070">Go To Profile</Link>
      <Link to="/dashboard/main">Go To Main</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
