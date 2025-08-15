import React from 'react';

import { NotificationContext } from '../NotificationProvider'
import ToastShelf from '../ToastShelf'
import NotificationToast from '../NotificationToast'


function NotificationToastShelf() {
  const { notifications } = React.useContext(NotificationContext)

  return (
    <ToastShelf role={"region"} aria-live={"polite"} aria-label={"Notification"}>
      {notifications.map((notification) => (
        <NotificationToast key={notification.id} notification={notification}/>
      ))}
    </ToastShelf>
  )
}

export default NotificationToastShelf;
