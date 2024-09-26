import React from 'react';

function User(props) {
  return (
    <p>
      <span>Author:</span> {props.name}; <span>email:</span> {props.email} 
    </p>
  )
}

export default User;
