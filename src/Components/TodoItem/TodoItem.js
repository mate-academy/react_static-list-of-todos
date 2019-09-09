import React from 'react';
import PropTypes from 'prop-types';
import UserComponent from '../User/User';
import './TodoItemStyle.css';

const TodoItem = ({ todo }) => {
  const { id, title, user } = todo;

  return (
    <div className="todoItem">
      <p className="TodoItem__title">{id}</p>
      <p className="TodoItem__main-title">{title}</p>
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
