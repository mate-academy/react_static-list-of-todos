import React from 'react';

function User(props) {
  return (
    <td>
      {props.name}
      {props.email}
    </td>
  )
}

export default User;
