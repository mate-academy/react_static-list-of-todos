import React from 'react';
import '../App.css'

const TodoItem = (props) => {
  return (
    <tr>
      <td><a href={'#' + props.userName} onClick={() => props.showUserData(props.userId)}> {props.userName} </a></td>
      <td>{props.title}</td>
      <td>{props.status}</td>
    </tr>
  )
}

export default TodoItem;