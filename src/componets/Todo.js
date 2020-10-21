import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import User from './User';
import { TodoShape } from './shapes/TodoShape';

function Todo({ todo: { title, completed, user } }) {
  return (
    <>
      <ListGroupItem className="my-3 bg-dark text-light">
        <p className="text-center">
          {title}
        </p>

        {completed
          ? <p className="todo__completed">Done</p>
          : <p className="todo__completed--not">Not done</p>}

        <User user={user} />
      </ListGroupItem>
    </>
  );
}

Todo.propTypes = TodoShape;

export default Todo;
