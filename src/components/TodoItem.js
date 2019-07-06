import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

import users from '../api/users';

function TodoItem(props) {
  const filteredUsers = users.filter(user => user.id === props.item.userId);
  const Users = filteredUsers.map(user => <User key={user.id} user={user} />);

  return (
    <div className="TodoItem">
      <div className="TodoItemContainer">
        <div className="ItemHeader">
          <h2>{props.item.title}</h2>
          <input type="checkbox" checked={props.item.completed} />
        </div>
        {Users}
      </div>
    </div>
  );
}

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
