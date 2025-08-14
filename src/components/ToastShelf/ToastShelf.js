import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({notifications, notificationDismisser}) {
  return (
    <ol className={styles.wrapper}>
      {notifications.map(notification => {
        return (
          <li key={notification.id} className={styles.toastWrapper}>
            <Toast
              variant={notification.variant}
              onDismiss={() => notificationDismisser(notification)}
            >
              {notification.message}
            </Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
