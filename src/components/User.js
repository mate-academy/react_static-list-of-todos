import React from 'react';

export default function User(props){
  const {name, email} = props;
  return (
    <div>
      <p>User: {name}</p>
      <p>Email: {email}</p>
    </div>);
}
