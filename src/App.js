import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)


  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  };

  const changeColor = () => {
    setIsOn(prevColor => !prevColor)
  }

  return (
    <>
    <button onClick={incrementCount}>I was clicked {count} times</button>
    <h4>Toggle Color:</h4>
    <div onClick={changeColor} style={{ height:"50px", width:"50px", background: isOn ? "yellow" : "gray" }}></div>
    </>
  );
}

export default App;
