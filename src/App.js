// Counter.js
import React from 'react';
import useStore from './store';

function App() {
  
  const { count, increase, decrease, reset } = useStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
