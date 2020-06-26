import React from 'react';
import { ShapeTodoList } from '../Shapes';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = props => (
  <ul>
    {props.list.map(todo => <TodoItem key={todo.id} todoItem={todo} />)}
  </ul>
);

TodoList.propTypes = ShapeTodoList.isRequired;

export default TodoList;
