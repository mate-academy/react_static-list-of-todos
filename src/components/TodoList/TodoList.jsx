import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ tasks }) =>{
  console.log(tasks[0])
  return(
  <div className='todoList'>
    {tasks.map(task => (
      <Todo key={task.id} {...task}/>
    ))}
  </div>
  )
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
