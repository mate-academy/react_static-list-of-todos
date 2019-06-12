import React from 'react';
import { users } from './users.js';

function User(props) {
  const {
    todoOwnerId: userId
  } = props;

  const userName = users.find(person => person.id === userId).name;
  
  return (
    <h3>{userName}</h3>
  ); 
}

export default User;

