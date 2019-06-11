import React from 'react';

function User(props) {
  return (
    <span><a href={props.email}>{props.name}</a></span>
  );
}

export default User;
