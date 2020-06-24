import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';
import User from '../User/User';
import { userShape } from '../Shapes/UserShape';

const Todo = props => (
  <li className="container" style={changeColor(props.completed)}>
    <p className="container__paragraph">
      {props.title}
    </p>
    <p className="container__state">
      {changeState(props.completed)}
    </p>
    <User {...props.user} />
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
  user: userShape.isRequired,
};

export default Todo;
