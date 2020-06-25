import React from 'react';
import TodoItem from '../TodoItem';
import './TodoList.css';
import { ShapeTodoList } from '../Shape';

function TodoList({ todos }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Name</td>
            <td>Email</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
        </tbody>
      </table>
    </div>
  );
}

TodoList.propTypes = ShapeTodoList.isRequired;

export default TodoList;
