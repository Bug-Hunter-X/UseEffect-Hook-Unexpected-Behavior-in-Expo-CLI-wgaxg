import {useEffect, useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will only run once when the component mounts.
    console.log('Mounted!');
  }, []);

  useEffect(() => {
    // This will run every time the count changes.
    console.log('Count changed:', count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}