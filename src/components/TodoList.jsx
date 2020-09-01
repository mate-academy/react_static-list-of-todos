import React from 'react';
import { Todo } from './Todo';
import './TodoList.css';
import { TodoListShape } from './Shape';

export const TodoList = ({ list }) => (
  <>
    <li className="filters">
      <p>#</p>
      <p>Name</p>
      <p>Nickname</p>
      <p>Task</p>
      <p>Status</p>
    </li>
    <ul className="list">

      {list.map(item => <Todo key={item.id} {...item} />)}
    </ul>
  </>
);

TodoList.propTypes = TodoListShape.isRequired;
