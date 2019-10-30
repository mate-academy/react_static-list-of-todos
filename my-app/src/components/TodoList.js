import React from 'react';
import TodoItem from './TodoItem';


function TodoList(props) {
  const listDetails = [];
  for (const shouldDo of props.todo) {
    listDetails.push(
    <TodoItem title = {shouldDo.title} completed = {shouldDo.completed ? 'completed' : 'not completed'} key = {shouldDo.id} userId = {shouldDo.userId} className = {shouldDo.userId} />
    );
  }
    return (
    <tbody>{listDetails}</tbody>
  );
}

export default TodoList;
