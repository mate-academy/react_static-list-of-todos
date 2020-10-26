import React from 'react';
import { User } from '../User/User';
import { TodoListShape } from '../../shapes/TodoListShape';

export const Todo = ({ title, user }) => (
  <>
    <h1 className="item item-title">
      {title}
    </h1>
    <h3 className="item item-name">
      <User user={user} />
    </h3>
  </>
);

Todo.propTypes = TodoListShape;
