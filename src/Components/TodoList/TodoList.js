import React from 'react';
import PropTypes from 'prop-types';
import ToDo from '../ToDo/ToDo';
import './TodoList.scss';

function TodoList(props) {
  return (
    <div className="container">
      {props.tasks.map(task => (
        <ToDo task={task} key={task.id} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
