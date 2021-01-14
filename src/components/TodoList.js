import React from 'react';
import PropTypes from 'prop-types';
import { UserTask } from '../types';
import Todo from './Todo';

function TodoList({ preparedTasks }) {
  return (
    <div>
      {preparedTasks.map(item => (
        <Todo task={item} key={item.id} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  preparedTasks: PropTypes.arrayOf(UserTask.isRequired).isRequired,
};

export default TodoList;
