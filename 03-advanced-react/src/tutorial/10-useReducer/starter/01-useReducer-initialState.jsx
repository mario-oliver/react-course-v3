import React from 'react';
import { data } from '../../../data';
import { useReducer } from 'react';
const ReducerBasics = () => {
  //default state can be anything, but here it'll be an object
  //normally we have multiple things in here (error, loading, user info)
  const defaultState = { people: data };

  //pass in a defualt state and a reducer (a funciton that will manipulate the state)
  const reducer = () => {
    //where we will control our entire state
    //whatever state we return with reducer will be the new state
  };

  const [state, dispatch] = useReducer(reducer, defaultState);
  //when using dispath (i.e. dispatch an action -> {type: 'SOME_ACTION'})
  //we handle it in reducer, RETURN A NEW STATE

  //use reducer is taking over this useState() of data
  // const [people, setPeople] = React.useState(data);

  //won't be able to use setState functionality like this
  //instead will need to rely on dispatch rather than callback functions
  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const resetItems = () => {
    // setPeople(data);
  };

  const clearItems = () => {
    // () => setPeople([])
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length == 0 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem', marginLeft: '.5rem' }}
          onClick={resetItems}
        >
          Import Items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearItems}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
