import React from 'react';
import { ToDoShape } from '../../shapes/ToDoShapes';
import { User } from '../User';

export function ToDo({ completed, user }) {
  const status = completed === false
    ? (<td className="completed">Completed</td>)
    : (<td className="not-completed">Not completed</td>);

  return (
    <>
      <User name={user.name} />
      {status}
    </>
  );
}

ToDo.propTypes = ToDoShape;
