import { Person } from './Person';
import React from 'react';
import { people } from '../../../data';

const List = () => {
  console.log(people);
  return (
    <div>
      {people.map((person) => {
        return <Person {...person} key={person.name} />;
      })}
    </div>
  );
};

export default List;
