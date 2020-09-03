import React from 'react';
import PropTypes, { number } from 'prop-types';

import users from '../api/users';

function TodoItem({ title, completed, userId }) {
  return (
    <div className={completed ? 'border bg-success' : 'border bg-danger'}>
      {users.map(user => (user.id === userId ? <h4>{user.name}</h4> : null)) }
      <p>{title}</p>
      {completed ? <i><b>Completed</b></i> : null}
    </div>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  userId: number.isRequired,
};

export default TodoItem;
