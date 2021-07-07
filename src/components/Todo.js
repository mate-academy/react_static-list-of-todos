import React from 'react';
import User from './User';
import TodoShape from './propTypesTodoShape/TodoShape';

const Todo = ({ todo }) => (
  <>
    <h4 className="title">{`${todo.id} ${todo.title}`}</h4>
    {todo.completed
      ? (<span className="progress progress__complete">Done</span>)
      : (<span className="progress progress__not-complete">Not done</span>)
    }
    <User user={todo.user} />
  </>
);

Todo.propTypes = TodoShape;

export default Todo;
