import { useEffect, useState } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //(*)

  useEffect(() => {
    let getResult = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getResult();
  }, []);

  if (isLoading) {
    //(*)
    return <h1>...Loading</h1>;
  } else {
    return (
      <section>
        <h3>Github Users</h3>
        <ul className="users">
          {users.map((user) => {
            return (
              <li key={user.id}>
                <img src={user.avatar_url} alt={user.login} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
};
export default FetchData;
