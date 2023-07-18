import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  let login = () => {
    setUser({ name: 'Mario' });
  };

  let logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <h4>Hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h4>Please login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default UserChallenge;
