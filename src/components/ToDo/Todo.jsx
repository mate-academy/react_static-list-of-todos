import React from 'react';
import { ToDoShape } from '../../shapes/ToDoShapes';
import { User } from '../User';

export function ToDo({ completed, user, title }) {
  return (
    <>
      <td>{title}</td>
      <User user={user} />
      {completed === false
        ? (<td className="completed">Completed</td>)
        : (<td className="not-completed">Not completed</td>)}
    </>
  );
}

ToDo.propTypes = ToDoShape;
