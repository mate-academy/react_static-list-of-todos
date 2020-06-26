import React from 'react';
import { ShapeTodoItem } from '../Shapes';
import User from '../User/User';
import './TodoItem.css';

const TodoItem = ({ todoItem }) => (
  <li>
    <div className="todo__item">
      <div>
        {
          todoItem.completed
            ? (
              <span
                className="todo__status todo__status--completed"
              >
                Completed
              </span>
            ) : (
              <span className="todo__status">Uncompleted</span>
            )
        }
      </div>
      <div className="todo__title">{todoItem.title}</div>
      <User user={todoItem.user} />
    </div>
  </li>
);

TodoItem.propTypes = ShapeTodoItem.isRequired;

export default TodoItem;
