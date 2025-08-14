import React from 'react';

import { DEFAULT_VARIANT_OPTION, VARIANT_OPTIONS } from '../../constants'
import Notification from '../../models/notifications'
import Button from '../Button'

import styles from './CreateNotificationForm.module.css'


function CreateNotificationForm({onNewNotificationCreated}) {
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT_OPTION)

  function handleSubmit(event) {
    event.preventDefault()

    onNewNotificationCreated(new Notification({message, variant}))

    setMessage('')
    setVariant(DEFAULT_VARIANT_OPTION)
  }

  return (
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
  )
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

export default CreateNotificationForm;
