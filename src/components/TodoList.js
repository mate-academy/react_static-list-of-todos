import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export const TodoList = ({ todo }) => (
  <>
    {todo.map(item => (
      <div className="todo__item" key={item.id}>
        <Todo todo={item} />
      </div>
    ))}
  </>
);

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
