import React from 'react';

import { NotificationContext } from '../NotificationProvider'
import CreateNotificationForm from '../CreateNotificationForm'
import Toast from '../Toast'
import ToastShelf from '../ToastShelf'

import styles from './ToastPlayground.module.css';


function ToastPlayground() {
  const { notifications, dismissNotification } = React.useContext(NotificationContext)

  console.log("Rendering playground.")
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf>
        {notifications.map((notification) => {
          return (
              <Toast key={notification.id} variant={notification.variant} onDismiss={() => dismissNotification(notification)}>
                {notification.message}
              </Toast>
            )
        })}
      </ToastShelf>

      <CreateNotificationForm/>
    </div>
  );
}

export default ToastPlayground;
