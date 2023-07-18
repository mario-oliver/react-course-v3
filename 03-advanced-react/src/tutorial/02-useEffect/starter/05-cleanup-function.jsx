import { useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  let renderInit = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h2>cleanup function</h2>
      <button className="btn" onClick={renderInit}>
        Toggle
      </button>
      {toggle && <RandomComponent></RandomComponent>}
    </div>
  );
};

const RandomComponent = () => {
  return <h1>Hello</h1>;
};

export default CleanupFunction;
