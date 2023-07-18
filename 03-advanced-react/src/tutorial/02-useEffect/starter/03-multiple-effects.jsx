import { useState, useEffect } from 'react';

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const FIRSTMSG = 'hello from first useEffect';
  const SECMSG = 'hello from second useEffect';

  useEffect(() => {
    console.log(FIRSTMSG);
  }, [value]);

  useEffect(() => {
    console.log(SECMSG);
  }, [secondValue]);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;
