import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';
import User from '../User/User';
import { UserShape } from '../Shapes/UserShape';

const Todo = ({ title, completed, user }) => (
  <li className="container" style={changeColor(completed)}>
    <p className="container__paragraph">
      {title}
    </p>
    <p className="container__state">
      {changeState(completed)}
    </p>
    <User {...user} />
  </li>
);

const changeColor = status => (
  status === true
    ? { background: '#f5b775' }
    : { background: '#a475f5' }
);

const changeState = status => (
  status === true
    ? 'Done'
    : 'Not done'
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserShape.isRequired,
};

export default Todo;
