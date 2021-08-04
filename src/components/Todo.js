import React from 'react';
import User from './User';

const Todo = ({ title, completed, user }) => (
  <>
    <p className="title">
      {title}
    </p>
    <p>
      status
      {' - '}
      {completed ? 'true' : 'false'}
    </p>
    <User {...user} />
  </>
);

export default Todo;
