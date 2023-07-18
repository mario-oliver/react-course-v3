import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  let handleOnClick = (id) => {
    let newPeeps = people.filter((person) => person.id !== id);
    setPeople(newPeeps);
  };

  let handleRemoveAll = () => {
    setPeople([]);
  };

  const [people, setPeople] = useState(data);
  return (
    <div>
      {people.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <button
              type="button"
              className="btn"
              onClick={() => handleOnClick(item.id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={handleRemoveAll}>
        remove all
      </button>{' '}
    </div>
  );
};

export default UseStateArray;
