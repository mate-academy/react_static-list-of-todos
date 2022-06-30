import React from 'react';
import classNames from 'classnames';
import TodoInfo from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list">
    {todos.map((todo) => (
      <li
        key={todo.id}
        className={classNames('list__item', {
          'list__item--done': todo.completed,
        })}
      >
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);

export default TodoList;
// Don't forget to import the React library

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

// Add a default export statement for TodoInfo component to use it in the other files
