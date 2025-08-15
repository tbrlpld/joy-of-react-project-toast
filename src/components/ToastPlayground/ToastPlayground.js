import React from 'react';

import { NotificationContext } from '../NotificationProvider'
import CreateNotificationForm from '../CreateNotificationForm'
import NotificationToast from '../NotificationToast'
import ToastShelf from '../ToastShelf'

import styles from './ToastPlayground.module.css';


function ToastPlayground() {
  const { notifications } = React.useContext(NotificationContext)

  console.log("Rendering playground.")
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf>
        {notifications.map(
          (notification) => <NotificationToast key={notification.id} notification={notification}/>
        )}
      </ToastShelf>

      <CreateNotificationForm/>
    </div>
  );
}

export default ToastPlayground;
