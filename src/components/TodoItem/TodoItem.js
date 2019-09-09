import React from 'react';
import User from '../User/User';

function TodoItem(props) {
  const { todo } = props;
  const { completed, title, user } = todo;

  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className={`todo-list__item ${completed ? 'todo-list__item--is-complete' : ''}`}>
        <h2>{title}</h2>
        <User user={user} />
      </div>
    </div>
  );
}

export default TodoItem;