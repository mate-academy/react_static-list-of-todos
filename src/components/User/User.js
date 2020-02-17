import React from 'react';

function User({ user }) {
  const { name, email } = user[0];
  const { city } = user[0].address;

  return (
    <div>
      <p>
        Name: 
        {name}
      </p>
      <p>
        Email:
        {email}
      </p>
      <p>
        City:
        {city}
      </p>
    </div>
  );
}

export default User;
