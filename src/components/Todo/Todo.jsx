import React from 'react';
import User from '../User/User';

import './Todo.scss';

const Todo = ({ title, completed, user }) => (
  <li className="list-item">
    <div className={completed ? "icon icon--checked" : "icon icon--cross"}></div>
    <span>{title}</span>
    <User {...user}/>
  </li>
);

export default Todo;
