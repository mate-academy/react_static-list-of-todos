import React from 'react';

function User({ user }) {
  const { name, email } = user;
  const { city } = user.address;

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
