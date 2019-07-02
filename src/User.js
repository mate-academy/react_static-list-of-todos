import React from 'react';

function User(props) {
  const { name, email, phone, website } = props.user;
  return (
    <div className="user">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p className="user__website">Website:
        <a className="user__website-link" href={website}>
          {website}
        </a>
      </p>
    </div>
  );
}

export default User;
