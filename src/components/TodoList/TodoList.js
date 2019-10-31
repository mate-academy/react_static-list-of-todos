import React from 'react';
import '../TodoList/todoList.css';
import todos from '../../api/todos';
import users from '../../api/users';
import TodoRow from '../TodoRow/TodoRow';

const getTodosWithUsers = function(todos, users) {
  return (
    todos.map(todo => <TodoRow
    todo={todo}
    user={users.find(user =>todo.userId === user.id)}
    />)
  );
};

const TodoList = () => {
  return (
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
};

export default TodoList;
