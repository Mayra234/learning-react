import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <div>Counter: {counter}</div>
      <div>
        <button onClick={increment}>Increment + 1</button>
      </div>
      <div>
        <button onClick={decrement}>Decrement - 1</button>
      </div>
    </>
  );
};
