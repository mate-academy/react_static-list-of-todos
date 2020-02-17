import React from 'react';
import User from '../User/User';

function Todo({ todo }) {
  const { title, completed } = todo;
  const { user } = todo;

  return (
    <div className="col s4">
      <div className={`card small ${completed ? 'teal' : 'blue-grey'}`}>
        <div className="card-content white-text">
          <span className="card-title">{title}</span>
        </div>
        <User user={user} address={user} />
      </div>
    </div>
  );
}

export default Todo;
