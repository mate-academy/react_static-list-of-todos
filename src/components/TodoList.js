import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList({ preparedTasks }) {
  return (
    <div>
      { preparedTasks.map(item => (
        <Todo task={item} key={item.id} />
      )) }
    </div>
  );
}

TodoList.propTypes = {
  preparedTasks: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TodoList;
