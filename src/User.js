import React from 'react';

function User(props) {
	console.log(props);
  return (
    <>
      <td>
        {props.user.name}
      </td>
      <td>
        {props.user.username}
      </td>
      <td>
        {props.user.email}
      </td>
    </>
  );
}

export default User;
