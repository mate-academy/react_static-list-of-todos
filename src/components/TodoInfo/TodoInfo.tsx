import React from 'react';

type TodosProps = {
  todo: Todos
};

export const TodoInfo:React.FC<TodosProps> = ({ todo }) => (
  <>
    <p className="todo_title">{todo.title}</p>
    <div className="todo_status">
      <div className={todo.completed ? 'todo_completed-red' : 'todo_completed-green'}> </div>
    </div>
  </>
);
