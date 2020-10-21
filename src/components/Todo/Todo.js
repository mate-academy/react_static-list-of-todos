import React from 'react';
import { User } from '../User';
import { TodoShape } from '../shapes/TodoShape';

export const Todo = ({ title, completed, user }) => (
  <>
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{ title }</h5>
      <span className="badge-primary badge-pill">
        {
          completed
            ? 'done'
            : 'in process'
        }
      </span>
    </div>
    <User {...user} />
  </>
);

Todo.propTypes = TodoShape;
