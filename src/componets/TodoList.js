import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Todo from './Todo';
import { TodoListShape } from './shapes/TodoListShape';

function TodoList({ todos }) {
  return (
    <ListGroup>
      {todos.map(item => (
        <Todo {...item} key={item.id} />
      ))}
    </ListGroup>
  );
}

TodoList.propTypes = TodoListShape;

export default TodoList;
