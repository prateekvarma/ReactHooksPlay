import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const [mousePosition, setMousePosition] = useState({x: null, y: null})
  const [status, setStatus] = useState(navigator.onLine)

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    // the following will remove the memory clutter, it won't just clean after running the effect, but also before running an effect
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline); 
    }
  }, [count]);
  // Above, you can pass an empty array at the end of the return, this will ensure the function (useEffect) is run only when component is mounted, and then unmounted
  // But the empty array will not display click count on the browser tab title. To fix this, pass 'count' into the array - to run function every time count is changed.

  const handleOnline = () => {
    setStatus(true)
  }

  const handleOffline = () => {
    setStatus(false)
  }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

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
    <h4>Mouse Coordinates:</h4>
    {JSON.stringify(mousePosition)}
    <h4>Internet Status:</h4><span>{status ? "online" : "offline"}</span>
    </>
  );
}

export default App;
