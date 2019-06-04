import React from 'react';
import { users } from '../users';

const userMap = {}
users.forEach(item => {
  userMap[item.id] = item;
})

function User(props) {
  return (
    <td><a href={'mailto:' + userMap[props.id].email}>{userMap[props.id].name}</a></td>
  )
}

export default User;
