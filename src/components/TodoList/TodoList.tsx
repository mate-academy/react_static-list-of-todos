import React from 'react';
import style from './TodoList.module.css';
import { PreparedTodo } from '../../types/Types';
import TodoInfo from '../TodoInfo/TodoInfo';

type Props = {
  todos: PreparedTodo[],
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className={style.todoList}>
    {todos.map(todo => (
      <li className={style.todoItem}>
        <TodoInfo
          key={todo.id}
          todo={todo}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
