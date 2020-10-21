import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Todo from './Todo';

function TodoList({ todo }) {
  return (
    <ListGroup>
      {todo.map(item => (
        <Todo todo={item} key={item.id} />
      ))}
    </ListGroup>
  );
}

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TodoList;
