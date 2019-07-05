import React from 'react'
import TodoItem from "./TodoItem";



function TodoList(props) {
  return(
    props.data.map(t=> <TodoItem todo={t}/>)
  )
}

export default TodoList
