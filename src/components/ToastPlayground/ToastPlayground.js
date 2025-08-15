import React from 'react';

import NotificationProvider from '../NotificationProvider'
import CreateNotificationForm from '../CreateNotificationForm'
import ToastShelf from '../ToastShelf'

import styles from './ToastPlayground.module.css';


function ToastPlayground() {
  console.log("Rendering playground.")
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <NotificationProvider>
        <ToastShelf/>

        <CreateNotificationForm/>
      </NotificationProvider>
    </div>
  );
}

export default ToastPlayground;
