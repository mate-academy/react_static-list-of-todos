import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList({ list }) {
  return (
    <ul>
      {list.map(toDo => (
        <li key={toDo.id}>
          <Todo user={toDo} />
        </li>
      ))}

    </ul>
  );
}

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default TodoList;
