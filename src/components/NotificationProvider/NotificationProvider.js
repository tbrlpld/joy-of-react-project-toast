import React from 'react';

export const NotificationContext = React.createContext()

function NotificationProvider({children}) {
  const [notifications, setNotifications] = React.useState([])


  const value = React.useMemo(
    () => {
      function submitNotification(notification) {
        setNotifications([...notifications, notification])
      }

      function dismissNotification(notification) {
        // Create filtered version of array, only keeping notifications that are
        // not the passed one.
        const nextNotifications = notifications.filter(item => item !== notification)
        setNotifications(nextNotifications)
      }

      return {
        notifications,
        submitNotification,
        dismissNotification,
      }
    },
    [notifications, setNotifications],
  )

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider;
