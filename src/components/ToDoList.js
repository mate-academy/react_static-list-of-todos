import React from 'react';
import PropTypes from 'prop-types';

import { ToDo } from './ToDo';

export const ToDoList = ({ list }) => (
  <ul className="todo-list">
    {
        list.map((todo) => {
          const isCompleted = todo.completed
            ? ('completed')
            : ('non-completed');

          return (
            <table className={`todo-table ${isCompleted}`}>
              <ToDo todo={todo} />
            </table>
          );
        })
      }
  </ul>
);

ToDoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};
