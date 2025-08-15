import React from 'react';

import Toast from '../Toast'
import { NotificationContext } from '../NotificationProvider'

function NotificationToast({notification}) {
  const { dismissNotification } = React.useContext(NotificationContext)

  return (
    <Toast
      variant={notification.variant}
      onDismiss={() => dismissNotification(notification)}
    >
      {notification.message}
    </Toast>
  )
}

export default NotificationToast;
