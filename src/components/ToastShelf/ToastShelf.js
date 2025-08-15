import React from 'react';

import { NotificationContext } from '../NotificationProvider'
import Toast from '../Toast';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { notifications, dismissNotification } = React.useContext(NotificationContext)

  console.log("Rendering shelf.")
  return (
    <ol className={styles.wrapper}>
      {notifications.map(notification => {
        return (
          <li key={notification.id} className={styles.toastWrapper}>
            <Toast variant={notification.variant} onDismiss={() => dismissNotification(notification)}>
              {notification.message}
            </Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
