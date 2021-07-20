import React from 'react';
import PropTypes from 'prop-types';
import { TodoPropTypes } from '../TodoPropTypes';
import { Todo } from '../Todo/Todo';

export const TodoList = function TodoList({ tasks }) {
  return (
    <ol className="list-group list-group-numbered">
      {tasks.map(task => (
        <li key={task.id} className="list-group-item">
          <Todo
            title={task.title}
            completed={task.completed}
            user={task.user}
          />
        </li>
      ))}
    </ol>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(TodoPropTypes).isRequired,
};
