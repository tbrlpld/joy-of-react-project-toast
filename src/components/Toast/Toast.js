import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import { DEFAULT_VARIANT_OPTION } from '../../constants'
import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({
  variant=DEFAULT_VARIANT_OPTION,
  onDismiss,
  children,
}) {
  const IconTag = ICONS_BY_VARIANT[variant]

  console.log("Rendering toast.")
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>

      <p className={styles.content}>
        <VisuallyHidden>{variant} – </VisuallyHidden>
        {children}
      </p>

      <button
        className={styles.closeButton}
        onClick={onDismiss}
        aria-label={"Dismiss message"}
        aria-live={"off"}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default React.memo(Toast);
