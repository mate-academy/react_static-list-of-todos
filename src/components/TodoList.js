import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ todos }) => (
  <>
    <table>
      {
        // eslint-disable-next-line max-len
        todos.map(todo => <Todo key={todo.id} title={todo.title} completed={todo.completed} user={todo.user} />)
      }
    </table>
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
