import React from 'react';

import styles from './ToastShelf.module.css';

function ToastShelf({children}) {
  console.log("Rendering shelf.")
  return (
    <ol className={styles.wrapper}>
      {children.map(child  => {
        return (
          <li key={child.key} className={styles.toastWrapper}>
            {child}
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
