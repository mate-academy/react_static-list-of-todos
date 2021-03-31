import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../Card';

export const List = ({ tasks }) =>{
  console.log(tasks[0])
  return(
  <div className='todoList'>
    {tasks.map(task => (
      <Card key={task.id} {...task}/>
    ))}
  </div>
  )
}

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
