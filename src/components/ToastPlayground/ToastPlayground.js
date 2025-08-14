import React from 'react';

import ToastShelf from '../ToastShelf'
import styles from './ToastPlayground.module.css';
import CreateNotificationForm from '../CreateNotificationForm'


function ToastPlayground() {
  const [notifications, setNotifications] = React.useState([])

  function submitNotification(notification) {
    setNotifications([...notifications, notification])
  }

  function dismissNotification(notification) {
    // Create filtered version of array, only keeping notifications that are
    // not the passed one.
    const nextNotifications = notifications.filter(item => item !== notification)
    setNotifications(nextNotifications)
  }

  console.log(notifications)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf notifications={notifications} dismissNotification={dismissNotification}/>

      <CreateNotificationForm onNewNotificationCreated={submitNotification}/>
    </div>
  );
}

export default ToastPlayground;
