import React from 'react';
import propTypes from 'prop-types';
import todos from './api/todos';
import users from './api/users';
import TodoItem from './TodoItem';
import User from './User';

const TodoList = () => {
  const listItem = todos.map(todoItem => users.map(
    (userItem) => {
      if (userItem.id === todoItem.userId) {
        return (
          <div className="todo-list__item">
            <TodoItem key={todoItem.id} item={todoItem} />
            <User key={userItem.id} user={userItem} />
          </div>
        );
      }

      return false;
    }
  ));

  return (
    <div className="todo-list__container">
      {listItem}
    </div>
  );
};

TodoItem.propTypes = {
  todos: propTypes.shape({
    userId: propTypes.number,
  }).isRequired,
  users: propTypes.shape({
    id: propTypes.number,
  }).isRequired,
};

export default TodoList;
