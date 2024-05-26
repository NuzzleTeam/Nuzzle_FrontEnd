import React, { useState } from "react"

function App() {
  const Counter = () => {
    const [count, setCount] = useState(0);
  
    const Increase = () => {
      console.log("increase가 클릭됨");
      setCount(prevCount => prevCount + 1);
    };
    const Decrease = () => {
      console.log("decrease가 클릭됨");
      setCount(prevCount => prevCount - 1);
    };
    return (
      <>
        <h1>{count}</h1>
        <button onClick={Increase}>+1</button>
        <button onClick={Decrease}>-1</button>
      </>
    );
  };
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App