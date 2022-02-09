//Created with  by Ahmad Emran

import React from "react";
import styles from './toggle.module.scss';

export default function ToggleTheme() {
  return (
    <div className={styles.toggleTheme}>
      <input type="checkbox" name="checkbox" className={styles.switch} />
    </div>
  );
}
