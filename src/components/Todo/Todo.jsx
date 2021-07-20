import React from 'react';
import { User } from '../User';
import { TodoShape } from '../../shapes';

export const Todo = ({ todoGroup }) => (
  <>
    <div className="item">
      <h3>{todoGroup.title}</h3>
      <p>{todoGroup.completed ? 'Completed.' : 'Not completed.'}</p>
      <User currentUser={todoGroup.user.name} />
    </div>
  </>
);
Todo.propTypes = {
  todoGroup: TodoShape.isRequired,
};
