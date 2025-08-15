import React from 'react';

import CreateNotificationForm from '../CreateNotificationForm'
import NotificationToastShelf from '../NotificationToastShelf'

import styles from './ToastPlayground.module.css';


function ToastPlayground() {
  console.log("Rendering playground.")
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <NotificationToastShelf />

      <CreateNotificationForm />
    </div>
  );
}

export default ToastPlayground;
