import { useState } from 'react';

const ErrorExample = () => {
  let [count, updateCount] = useState(0);
  let handleOnClick = () => {
    updateCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button type="button" className="btn" onClick={handleOnClick}>
        Count++
      </button>
    </div>
  );
};

export default ErrorExample;
