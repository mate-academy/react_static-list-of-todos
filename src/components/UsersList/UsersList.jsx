import React from 'react';
import './Users.scss';

import users from '../../api/users';

function Users() {
  return (
    <p>
      <span>Users: </span>
      <ul className="users">
        {users.map(user => (
          <li>
            {' '}
            {user.name}
            {' '}
          </li>
        ))}
      </ul>
    </p>
  );
}

export default Users;
