import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf'

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
const DEFAULT_VARIANT_OPTION = VARIANT_OPTIONS[0]

function ToastPlayground() {
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT_OPTION)

  function handleSubmit(event) {
    event.preventDefault()
    console.log({message, variant})
    setMessage('')
    setVariant(VARIANT_OPTIONS[0])
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

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
                  <Radio key={option} name={option} label={option} value={option} checkedValue={variant} onChange={() => setVariant(option)}/>
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
      />
      {label}
    </label>
  )
}

export default ToastPlayground;
