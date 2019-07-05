import React from 'react'
import users from '../api/users'
import User from "./User";
import '../App.css'

function TodoItem(props) {
  const user = users.find(u=> u.id === props.todo.userId)
  return(
<div className={'user'}>
  <input type={"checkbox"} checked={props.todo.completed}/>
  <p>
    Work: {props.todo.title}
  </p>
  <User user={user}/>
</div>

  )


}

export default TodoItem
