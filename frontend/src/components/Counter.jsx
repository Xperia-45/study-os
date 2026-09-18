import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>study sessions {count} times</p>
      <button  onClick ={() => setCount(count + 1)}>+</button>
      <button onClick ={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;