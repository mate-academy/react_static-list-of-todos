import React from 'react';
import './todoList.css';
import todos from '../../api/todos';
import users from '../../api/users';
import TodoRow from '../TodoRow/TodoRow';

const getTodosWithUsers = () => (
  todos.map((todo) => {
    todo.user = users.find(member => todo.userId === member.id);

    return <TodoRow todo={todo} />;
  })
);

const TodoList = () => (
  <table className="todo">
    <tr className="todo__row">
      <th className="todo__cell todo__cell_upper">ToDo</th>
      <th className="todo__cell todo__cell_upper">User</th>
      <th className="todo__cell todo__cell_upper">Completed?</th>
    </tr>
    <tbody className="todo__main">
      {getTodosWithUsers(todos, users)}
    </tbody>
  </table>
);

export default TodoList;
