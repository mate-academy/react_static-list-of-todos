import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { TodoShape } from '../../shapes';

export const TodoList = (props) => {
  const { todos } = props;

  return (
    <ul>
      {
        todos.map(todo => (
          <li className="todo" key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))
      }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
};
