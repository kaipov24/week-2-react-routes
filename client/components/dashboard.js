import React from 'react'
import { Link } from 'react-router-dom'  


const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div с id="title">Dashboard</div> 
          <Link to="/dashboard/profile/0355a3e9-4149-4e5d-b3a0-46e25687b070">Go To Profile</Link>
          <Link to="/dashboard/main">Go To Main</Link>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
