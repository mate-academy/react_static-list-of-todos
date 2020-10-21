import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Todo from './Todo';
import TodoListShape from './shapes/TodoListShape';

function TodoList({ todo }) {
  return (
    <ListGroup>
      {todo.map(item => (
        <Todo todo={item} key={item.id} />
      ))}
    </ListGroup>
  );
}

TodoList.propTypes = TodoListShape;

export default TodoList;
