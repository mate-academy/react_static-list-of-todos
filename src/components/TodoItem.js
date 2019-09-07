import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

import users from '../api/users';

const TodoItem = ({ item }) => {
  const filteredUsers = users.filter(user => user.id === item.userId);
  const Users = filteredUsers.map(user => <User key={user.id} user={user} />);

  return (
    <div className="TodoItem">
      <div className="TodoItemContainer">
        <div className="ItemHeader">
          <h2>{item.title}</h2>
          <input type="checkbox" checked={item.completed} />
        </div>
        {Users}
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    completed: PropTypes.bool,
    title: PropTypes.string,
    userId: PropTypes.number,
    user: PropTypes.object,
    id: PropTypes.number,
    item: PropTypes.object,
  }).isRequired,
};

export default TodoItem;
