import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  };

  return (
    <button onClick={incrementCount}>I was clicked {count} times</button>
  );
}

export default App;
