import React from 'react';
import User from '../User/User';
import TodoShape from '../../shapes/TodoShape';
import './Todo.scss';

const Todo = ({ title, user, completed }) => (
  <section className="card">
    <div className="card__info">
      <p className="card__task">
        {`Task: ${title}`}
      </p>
      <p className="card__user">
        {`User: `}
        <User name={user.name} />
      </p>
    </div>
    {completed
      ? (
        <div className="card__status card__status_completed">
          Completed
        </div>
      )
      : (
        <div className="card__status card__status_uncompleted">
          Not Completed
        </div>
      )
    }
  </section>
);

Todo.propTypes = TodoShape;

export default Todo;
