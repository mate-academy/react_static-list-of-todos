import React from 'react';

function User(props) {
  return (
    <td>
      {/* eslint-disable-next-line react/prop-types */}
      {props.person.name}
    </td>
  );
}

export default User;
