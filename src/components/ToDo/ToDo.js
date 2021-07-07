import React from 'react';

import { User } from '../User';
import { ToDoShape } from '../shapes/ToDoShape';
import './ToDo.scss';

export const ToDo = ({ completed, title, user }) => (
  <>
    <input
      type="checkbox"
      checked={completed}
      readOnly
      className="checkbox"
    />
    <p>
      {title}
    </p>
    <User {...user} />
  </>
);

ToDo.propTypes = ToDoShape;
