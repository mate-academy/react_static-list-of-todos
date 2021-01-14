import React from 'react';
import { User } from '../User/User';
import { checkPropTypesTodo } from '../checkPropTypes/checkPropTypesTodo';

import './Todo.scss';

export const Todo = ({ title, completed, users }) => (
  <li className="list__item">
    <div>
      <User name={users.username} />
    </div>

    <div>
      {title}
    </div>

    <div>
      <span>Status: </span>
      {completed
        ? (<span className="list__item--completed">done</span>)
        : (<span className="list__item--not-completed">in process</span>)}
    </div>

  </li>
);

Todo.propTypes = checkPropTypesTodo;
