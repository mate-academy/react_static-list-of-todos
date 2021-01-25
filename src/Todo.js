import React from 'react';
import { UserTypes } from './type';
import { User } from './User';

export const Todo = ({ user, title, completed }) => (
  <>
    <User {...user} />
    <p>
      <i>{title}</i>
      {' '}
      is
      { completed
        ? <span style={{ color: 'green' }}> completed</span>
        : <span style={{ color: 'red' }}> not completed</span> }
    </p>
  </>
);

Todo.propTypes = UserTypes.isRequired;
