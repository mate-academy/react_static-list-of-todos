import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import { TaskType } from '../Types/Types';

const TodoList = ({ tasksList }) => (
  <ul>
    {tasksList.map(task => (
      <li key={task.id}>
        <Todo task={task} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  tasksList: PropTypes.arrayOf(TaskType.isRequired).isRequired,
};

export default TodoList;
