import React from 'react';
import PropTypes from 'prop-types';
import users from './api/users';
import User from './User';

function TodoItem(props) {
  const filteredUsers = users.filter(user => user.id === props.todo.userId);
  const Users = filteredUsers.map(user => <User key={users.id} user={user} />);

  return (
    <div>
      <div>
        Task:
        {props.todo.title}
      </div>
      Responsible:
      {Users}
    </div>
  );
}

TodoItem.propTypes = {
  userId: PropTypes.number,
  todo: PropTypes.object,
  title: PropTypes.string,
}.isRequired;

export default TodoItem;
