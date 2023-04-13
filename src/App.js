import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const initialState = () => Number(window.localStorage.getItem('count')) || 0
  const [count, setCount] = useState(initialState)

  const incerementCounter = () => {
    setCount(count + 1)
  }

  useEffect(()=> {
    window.localStorage.setItem('count', count);
  }, [count])


  return (
    <div className="app">
      <div className="button-container">
        <button className="button button--primary" onClick={() => incerementCounter()}>Increment</button>
      </div>

      <p className="total-count">{count}</p>
    </div>
    
  );
}

export default App;