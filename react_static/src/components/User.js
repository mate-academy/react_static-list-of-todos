import React from 'react';

function User(props) {
  return (
    <td>
      {props.name}<br/>
      {props.email}
    </td>
  )
}

export default User;
