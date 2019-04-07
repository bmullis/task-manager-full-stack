import React from 'react'

const Notification = ({ notification, dismissNotification }) => {
  const handleDismissNotification = (id) => {
    dismissNotification(id)
  }

  return (
    <div className="notifications-box__notification">
      <div className="notifications-box__notification-left">
        <h4>{notification.title}</h4>
        <p>{notification.message}</p>
      </div>
      <div className="notifications-box__notifications-right">
        <div onClick={() => handleDismissNotification(notification._id)} className="close-notification"> x </div>
      </div>
    </div>
  )
}

export default Notification