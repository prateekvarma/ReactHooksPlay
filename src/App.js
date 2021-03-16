import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const [mousePosition, setMousePosition] = useState({x: null, y: null})

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    // the following will remove the memory clutter
    // it won't just clean after running the effect, but also before running an effect
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [count]);

  // Above, you can pass an empty array at the end of the return, this will ensure the function (useEffect) is run only when component is mounted, and then unmounted
  // But the empty array will not display click count on the browser tab title. To fix this, pass 'count' into the array - to run function every time count is changed.

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
    </>
  );
}

export default App;
