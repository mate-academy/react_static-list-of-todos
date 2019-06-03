import React from 'react';

function User(props) {
  return (
    <tr>
      <td>
        {props.user.name}
      </td>
      <td>
        {props.user.username}
      </td>
      <td>
        {props.user.email}
      </td>
    </tr>
  );
}

export default User;
