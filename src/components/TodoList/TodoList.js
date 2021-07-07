import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import { TodoShape } from '../propTypes/TodoShape';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(item => (
      <ul className="todoList" key={item.id}>
        <Todo {...item} />
      </ul>
    ))}
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
};
