import React, { useEffect, useState } from 'react';

const Effect2 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      <ol>
        {user.map((data) => (
          <li key={data.id}>
            <strong>ID:</strong> {data.id}<br />
            <strong>Name:</strong> {data.name}<br />
            <strong>Email:</strong> {data.email}<br /><br />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Effect2;
