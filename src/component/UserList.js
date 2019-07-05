import React from 'react';
import User from './User';

function UserList(props) {
  return (
    props.users.map(u => <User data={u} />)
  );
}

export default UserList;
