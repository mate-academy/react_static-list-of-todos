import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList(props) {
  const { preparedTodos } = props;

  return (
    preparedTodos.map(elem => (
      Object.entries(elem)[0][1].map(item => (
        <tr key={item.id}>
          <Todo item={item} elem={elem} />
        </tr>
      ))
    ))
  );
}

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default TodoList;
