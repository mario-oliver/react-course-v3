import React from 'react';
import { data } from '../../../data';
import { useReducer } from 'react';
const ReducerBasics = () => {
  //default state can be anything, but here it'll be an object
  //normally we have multiple things in here (error, loading, user info)
  const defaultState = { people: data };

  //***** Dispatch consts */
  const CLEAR = 'CLEAR_LIST';
  const REMOVE_ITEM = 'REMOVE';
  const RESET = 'RESET_LIST';

  //pass in a defualt state and a reducer (a funciton that will manipulate the state)
  //dispatch an action to be executer in the reducer
  //reducer will get the current state and the action (dispatch with type)
  const reducer = (state, action) => {
    //where we will control our entire state
    //whatever state we return with reducer will be the new state
    console.log(state, action);
    if (action.type === CLEAR) {
      return { ...state, people: [] };
    } else if (action.type === REMOVE_ITEM) {
      let newPeople = state.people.filter((person) => person.id !== action.id);
      return { ...state, people: newPeople };
    } else if (action.type === RESET) {
      return { ...state, people: data };
    }
    throw new Error(`No matching "${action.type}" - action.type`);
  };

  const [state, dispatch] = useReducer(reducer, defaultState);
  //when using dispath (i.e. dispatch an action -> {type: 'SOME_ACTION'})
  //we handle it in reducer, RETURN A NEW STATE

  //use reducer is taking over this useState() of data
  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type: REMOVE_ITEM, id });
  };

  const resetItems = () => {
    // setPeople(data);
    dispatch({ type: RESET });
  };

  const clearItems = () => {
    // () => setPeople([])
    dispatch({ type: CLEAR });
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
