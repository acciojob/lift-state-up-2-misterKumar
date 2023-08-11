import React, { useState } from 'react';
import Child from './Child.js';
import '../styles/App.css'; // You can define your CSS styles here

function App() {
  const [childInput, setChildInput] = useState('');

  const handleChildInputChange = (value) => {
    setChildInput(value);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>{childInput}</p>
      <Child onInputChange={handleChildInputChange} />
     
    </div>
  );
}

export default App;
