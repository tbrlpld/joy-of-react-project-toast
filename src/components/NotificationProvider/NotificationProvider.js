import React from 'react';

export const NotificationContext = React.createContext()

function NotificationProvider({children}) {
  const [notifications, setNotifications] = React.useState([])

  const value = React.useMemo(
    () => {
      function submitNotification(notification) {
        setNotifications((current) => [...current, notification])
      }

      function dismissNotification(notification) {
        setNotifications(
          (current) => {
            return current.filter(
              // Create filtered version of array, only keeping notifications that
              // are not the passed one.
              (item) => {
                return item !== notification
              }
            )
          }
        )
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
