import React from 'react';

import Notification from '../../models/notifications'
import useEscape from '../../hooks/use-escape'

export const NotificationContext = React.createContext({})

function NotificationProvider({children}) {
  const [notifications, setNotifications] = React.useState([])

  function createNotification({message, variant}) {
    const notification = new Notification({message, variant})
    setNotifications((current) => [...current, notification])
  }

  const dismissNotification = React.useCallback(
    function dismissNotification(notification) {
      setNotifications(
        current => current.filter(
          item => item !== notification
        )
      )
    },
    [setNotifications],
  )

  const dismissAllNotifications = React.useCallback(
    function dismissAllNotifications() {
      setNotifications([])
    },
    [setNotifications]
  )

  useEscape({callback: dismissAllNotifications})

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
