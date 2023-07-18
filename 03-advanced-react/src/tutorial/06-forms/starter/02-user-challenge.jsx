import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updatedUser = [...people, newUser];
    setPeople(updatedUser);
    setName('');
  };

  const handleRemove = (id) => {
    const newUsers = people.filter((person) => person.id !== id);
    setPeople(newUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {people.map((person) => {
        return (
          <div>
            <h4 key={person.id}>{person.name}</h4>
            <button onClick={() => handleRemove(person.id)} className="btn">
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
