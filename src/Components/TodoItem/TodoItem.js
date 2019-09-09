import React from 'react';
import PropTypes from 'prop-types';
import UserComponent from '../User/User';
import './TodoItemStyle.css';

const TodoItem = ({ todo }) => {
  const { id, title, user } = todo;

  return (
    <div className="todoItem">
      <p>{id}</p>
      <p>{title}</p>
      <UserComponent user={user} />
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.object,
  }).isRequired,
};

export default TodoItem;
