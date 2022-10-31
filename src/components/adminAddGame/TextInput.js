import React, { useState } from 'react';
import styles from './TextInput.module.scss';

export default function TextInput({ type = 'text', label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={styles.inputContainer}>
      <input className={value && styles.filledInput} type={type} value={value} onChange={handleChange} required/>
      <label className={value && styles.filled} >
        {label}
      </label>
    </div>
  );
}

