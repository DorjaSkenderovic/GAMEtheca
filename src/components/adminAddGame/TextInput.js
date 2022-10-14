import React, { useState } from 'react';
import './textInput.css';

export default function TextInput({ type = 'text', label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input className={value && 'filledInput'} type={type} value={value} onChange={handleChange} required/>
      <label className={value && 'filled'} >
        {label}
      </label>
    </div>
  );
}

