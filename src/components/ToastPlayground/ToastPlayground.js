import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf'

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
const DEFAULT_VARIANT_OPTION = VARIANT_OPTIONS[0]


class Notification {
  constructor ({message, variant=DEFAULT_VARIANT_OPTION}) {
    this.message = message
    this.variant = variant
  }
}


function ToastPlayground() {
  const [notifications, setNotifications] = React.useState([])
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT_OPTION)

  function handleSubmit(event) {
    event.preventDefault()

    const notification = new Notification({message, variant})
    console.log(notification)
    setNotifications([...notifications, notification])

    setMessage('')
    setVariant(DEFAULT_VARIANT_OPTION)
  }

  console.log(notifications)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf notifications={notifications}/>

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required={true}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>

          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {
              VARIANT_OPTIONS.map(option => {
                return (
                  <Radio key={option} name='variant' label={option} value={option} checkedValue={variant} onChange={() => setVariant(option)}/>
                )
              })
            }
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type={"submit"}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Radio ({name, label, value, checkedValue, onChange}) {
  const id = React.useId()

  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={value === checkedValue}
        onChange={onChange}
        required={true}
      />
      {label}
    </label>
  )
}

export default ToastPlayground;
