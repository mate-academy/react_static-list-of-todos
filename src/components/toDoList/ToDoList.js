import React from 'react';
import PropTypes from 'prop-types';
import ToDo from '../toDo/ToDo';
import './toDoList.css';

const ToDoList = ({ toDoList }) => (
  <>
    <ul className="toDoList">
      {toDoList.map(toDo => (
        <li key={toDo.id} className="toDoList__item">
          <ToDo text={toDo.title} done={toDo.completed} user={toDo.user} />
        </li>
      ))}
    </ul>
  </>
);

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.string.isRequired,
  })).isRequired,
};

export default ToDoList;
