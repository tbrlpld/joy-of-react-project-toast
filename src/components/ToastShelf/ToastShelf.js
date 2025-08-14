import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({notifications}) {
  return (
    <ol className={styles.wrapper}>
      {notifications.map(notification => {
        return (
          <li className={styles.toastWrapper}>
            <Toast variant={notification.variant}>{notification.message}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
