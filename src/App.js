// Counter.js
import React, { useEffect } from 'react';
import useStore from './store';
import { useFetchStore } from './store';

function App() {
  
  const { count, increase, decrease, reset } = useStore();

  const { todos, asyncFetch } = useFetchStore();

  useEffect(() => {
    asyncFetch(); // Fetch data when the component mounts
  }, []);
  console.log(todos);
  
  
  
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
