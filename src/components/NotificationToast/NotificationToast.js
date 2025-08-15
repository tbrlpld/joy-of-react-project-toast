import React from 'react';

import Toast from '../Toast'
import { NotificationContext } from '../NotificationProvider'

function NotificationToast({notification}) {
  const { dismissNotification } = React.useContext(NotificationContext)

  const dismissThisNotification = React.useCallback(
    () => {dismissNotification(notification)},
    [notification, dismissNotification],
  )

  return (
    <Toast variant={notification.variant} onDismiss={dismissThisNotification}>
      {notification.message}
    </Toast>
  )
}

export default NotificationToast;
