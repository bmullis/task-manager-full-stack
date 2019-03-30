import React, {useState, useContext} from 'react'
import { NavLink as Link } from 'react-router-dom'

import { AuthContext } from '../helpers/AuthContext'
import fetchResources from '../helpers/fetchResources'

const AuthNav = () => {
  const { auth, setAuth } = useContext(AuthContext)
  const [showNotifications, setShowNotifications] = useState(false)

  const notifications = fetchResources('notifications', auth.token)
  console.log(notifications)

  const handleUserSignOut = () => {
    setAuth({
      authed: false,
      token: ''
    })
  }

  const toggleShowNotifications = () => {
    if (showNotifications === false) {
      setShowNotifications(true)
    } else {
      setShowNotifications(false)
    }
  }

  return (
    <nav>
      <div className="container">
        <Link to="/"><h4>TaskApp</h4></Link>
  
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <span onClick={() => handleUserSignOut()}>Sign Out</span>
          </li>
          <li>
            <span aria-label="notification bell" role="img" onClick={toggleShowNotifications}>
              🔔 {notifications.length > 0 ? <span className="alert-dot"></span> : ''}
            </span>
          </li>
        </ul>
        {showNotifications && notifications.length === 0 &&
          <div className="notifications-box">
            <div className="notifications-box__carat"></div>
            <h4>No Notifications</h4>
          </div>
        }
        {showNotifications && notifications.length > 0 && 
          <div className="notifications-box">
            {notifications.map((notification) => {
              return (
                <div>
                  <div className="notifications-box__carat"></div>
                  <h4>{notification.title}</h4>
                  <p>{notification.message}</p>
                </div>
              )
            })}
          </div>
        }
      </div>
    </nav>
  )
}

export default AuthNav