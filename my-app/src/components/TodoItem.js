import React from 'react';

function TodoItem(props) {
   return (
    <tr className={props.completed === 'completed' ? 'green' : 'red'}> 
      <td>{props.title}</td>
      <td>{props.completed}</td>
    </tr>
  );
}

export default TodoItem;
