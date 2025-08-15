import React from 'react';

export const NotificationContext = React.createContext()

function NotificationProvider({children}) {
  const [notifications, setNotifications] = React.useState([])

  function submitNotification(notification) {
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
    submitNotification,
    dismissNotification,
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider;
