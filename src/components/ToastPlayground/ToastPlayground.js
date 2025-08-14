import React from 'react';

import Button from '../Button';
import Toast from '../Toast'

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
  const [isToastPopped, setIsToastPopped] = React.useState(false)

  function loadToast() {
    setIsToastPopped(false)
  }

  function popToast() {
    setIsToastPopped(true)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {
        isToastPopped &&
        <Toast onDismiss={loadToast}></Toast>
      }

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} onChange={(event) => setMessage(event.target.value)} value={message}/>
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
                  <Radio key={option} name={option} label={option} value={option} checkedValue={variant} setCheckedValue={setVariant}/>
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
            <Button type={"button"} onClick={popToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Radio ({name, label, value, checkedValue, setCheckedValue}) {
  const id = React.useId()

  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={value === checkedValue}
        onChange={() => setCheckedValue(value)}
      />
      {label}
    </label>
  )
}

export default ToastPlayground;
