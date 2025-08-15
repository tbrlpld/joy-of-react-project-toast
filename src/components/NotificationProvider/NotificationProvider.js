import React from 'react';

import Notification from '../../models/notifications'

export const NotificationContext = React.createContext()

function NotificationProvider({children}) {
  const [notifications, setNotifications] = React.useState([])

  function createNotification({message, variant}) {
    const notification = new Notification({message, variant})
    setNotifications((current) => [...current, notification])
  }

  function dismissNotification(notification) {
    setNotifications(
      current => current.filter(
        item => item !== notification
      )
    )
  }

  const value = {
    notifications,
    createNotification,
    dismissNotification,
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider;
