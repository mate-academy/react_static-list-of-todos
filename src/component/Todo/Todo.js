import React from 'react';
import User from '../User/User';
import './Todo.scss';
import { TodoShape } from '../shapes/TodoShape';

const Todo = ({ title, completed, user: { name } }) => (
  <div className={`todo ${completed ? 'todo--done' : 'todo--not-done'}`}>
    <div className="todo__wrapper">
      <User name={name} />
      <p className="todo__description">
        <span className="todo__key-word">Todo: </span>
        {title}
      </p>
    </div>

    <div className="todo__is-done">
      {completed
        ? <h2 className="todo__done">Completed</h2>
        : <h2 className="todo__not-done">In process</h2>}
    </div>
  </div>
);

Todo.propTypes = TodoShape.isRequired;

Todo.defaultProps = {
  title: 'No task yet',
};

export default Todo;
