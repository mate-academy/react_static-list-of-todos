import React from 'react';
import PropTypes from 'prop-types';
import './styles/Todo.css';
import User from './User';

const Todo = props => (
  <div className="container" style={changeColor(props.completed)}>
    <p className="container__paragraph">
      {props.title}
    </p>
    <p className="container__state">
      {changeState(props.completed)}
    </p>
    <User {...props.user} />
  </div>
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
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Todo;
