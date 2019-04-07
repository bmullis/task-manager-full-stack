import React, { useState, useContext, useEffect } from 'react'
import { NavLink as Link } from 'react-router-dom'
import axios from 'axios'

import Notification from './Notification'

import { AuthContext } from '../helpers/AuthContext'
import fetchResources from '../helpers/fetchResources'

const AuthNav = () => {
  const { auth, setAuth } = useContext(AuthContext)
  const [showNotifications, setShowNotifications] = useState(false)
  const [newNotifications, setNewNotifications] = useState([])

  const notifications = fetchResources('notifications', auth.token)

  useEffect(() => {
    setNewNotifications(notifications.filter((notification) => {
      return notification.is_read === false
    }))
  }, [notifications])


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

  const dismissNotification = async (id) => {
    try {
      const response = await axios.patch(`/notifications/${id}`, { is_read: true }, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      })
      console.log(response)

      setNewNotifications(newNotifications.filter((notification) => {
        return notification._id !== id
      }))

      renderNotifications(newNotifications)
    } catch (err) {
      console.log(err)
    }
  }

  const renderNotifications = () => {
    if (showNotifications && newNotifications.length > 0) {
      return (
        <div className="notifications-box">
          <div>
            <div className="notifications-box__carat"></div>
            {newNotifications.map((notification) => {
              return (
                <Notification 
                  key={notification._id} 
                  dismissNotification={dismissNotification} 
                  notification={notification} 
                />
              )
            })}
          </div>
        </div>
      )
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
              🔔 {newNotifications.length > 0 ? <span className="alert-dot"></span> : ''}
            </span>
          </li>
        </ul>
        {showNotifications && newNotifications.length === 0 &&
          <div className="notifications-box">
            <div className="notifications-box__carat"></div>
            <h4>No Notifications</h4>
          </div>
        }
        {renderNotifications()}
      </div>
    </nav>
  )
}

export default AuthNav