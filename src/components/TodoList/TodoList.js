/* eslint-disable no-console */
import React from 'react';
import { ShapeTodoList } from '../Shapes';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = props => (
  <ul>
    {
      props.list.map(singleTodo => (
        <TodoItem key={singleTodo.id} {...singleTodo} />))
    }
  </ul>
);

TodoList.propTypes = ShapeTodoList.isRequired;
export default TodoList;
