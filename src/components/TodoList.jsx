import React from 'react'
import {todos} from './todos'
import TodoItem from './TodoItem';

export default function TodoList() {
  const listOfToDos = [];
  for(const todoItem of todos) {
    listOfToDos.push(<TodoItem 
      title = {todoItem.title} 
      userId = {todoItem.userId} 
      status = {todoItem.completed} 
      key = {todoItem.title}
    />)
  }
  console.log(listOfToDos);
  
  return (
    <table className = "table">
    <thead>
      <tr>
        <th>To Do</th>
        <th>Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {listOfToDos}
    </tbody>
    </table>
  )
}