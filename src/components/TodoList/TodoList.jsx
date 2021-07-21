import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { Todo } from '../Todo/';

export const TodoList = ({ todos }) => (
  <ListGroup>
    {todos.map(todo => (
      <ListGroup.Item variant="danger" className="list" key={todo.id}>
        <ListGroup.Item action variant="success" />
        <Todo {...todo} />
      </ListGroup.Item>
    ))}
  </ListGroup>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
