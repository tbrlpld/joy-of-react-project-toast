import React from 'react';

import styles from './ToastShelf.module.css';

function ToastShelf({children, ...props}) {
  console.log("Rendering shelf.")
  return (
    <ol className={styles.wrapper} {...props}>
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
