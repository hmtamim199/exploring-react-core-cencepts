import { useState } from "react";


const Counter = () => {

  const [count, setCount] = useState(10);

  const handleAddNumber = () => {
    const updateCountNumber = count + 10;
    setCount(updateCountNumber)
  }

  const handleDecressNumber = () => {
    const newDecressNumber = count - 5;
    setCount(newDecressNumber)
  }

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleAddNumber}>add more</button>
      <button onClick={handleDecressNumber}>decress</button>
    </div>
  );
};

export default Counter;