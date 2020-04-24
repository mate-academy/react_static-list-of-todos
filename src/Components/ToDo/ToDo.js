import React from 'react';
import './ToDo.scss';
import User from '../User/User';

function ToDo(prop) {
  return (
    <div className="todo-card">
      <h2 className="todo-card__task">{prop.task.title}</h2>
      {prop.task.completed
        ? <h3 className="todo-card__status--done">Finished</h3>
        : <h3 className="todo-card__status--unfinished">Unfinished</h3>}
      <User data={prop.task.user} />
    </div>
  );
}

export default ToDo;
