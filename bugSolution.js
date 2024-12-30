import {useEffect, useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted!');
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]); // Correct dependency array ensures this runs only when 'count' changes

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;