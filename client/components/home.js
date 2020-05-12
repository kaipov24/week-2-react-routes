import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Header from './header'
import Profile from './profile'
import Main from './main'
import Dashboard from './dashboard'


const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/dashboard/" component={() => <Dashboard />} />
            <Route exact path="/dashboard/main" component={() => <Main />} />
            <Route exact path="/dashboard/profile/:user" component={() => <Profile />} />
          </Switch>
          <div><Link to="/dashboard">Go To Root</Link></div>
          <div><Link to="/dashboard/main">Go To Main</Link></div>
          <div><Link to="/dashboard/profile/0355a3e9-4149-4e5d-b3a0-46e25687b070">Go To Profile</Link></div>          
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
