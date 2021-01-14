import React from 'react';

import './Todo.scss';
import { listType } from '../../types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <div className="Todo">
    <div className="Todo__info">
      {title}
      { completed
        ? <div className="Todo__process">done</div>
        : <div className="Todo__process--not">not</div>
      }
    </div>

    <User {...user} />
  </div>
);

Todo.propTypes = listType;
