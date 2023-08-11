import React, { useState } from 'react';

const Child = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value); // Notify the parent component about the input change
  };

  return (
    <div className='child'>
      <h2>Child Component</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};

export default Child;