import React from 'react';

function User(props) {
  return (
    <div className="user">
      <p>Name: {props.user.name}</p>
      <p>Email: {props.user.email}</p>
      <p>Phone: {props.user.phone}</p>
      <p>Website: 
        <a className="user-website-link" href={props.user.website}>
          {props.user.website}
        </a>
      </p>
    </div>
  );
}

export default User;