/* eslint-disable */
import React from 'react';
import User from './User';

const Todoitem = ({todo}) => {  // eslint-disable-line
  const completedStyle = () => {
    const {completed} = todo;

    return completed === false
      ? <span style={{color: `red`}}>not completed</span>
      : <span style={{color: `green`}}>completed</span>;
  };

  return (
    <div style={{
      padding: `5px`,
      borderRadius: `5px`,
      boxShadow: `1px 1px grey`,
      float: `left`,
      width: `32%`,
      height: `25vw`,
      fontSize: `1.5vw`,
      backgroundColor: `#c9c3c3`,
      margin: `2px 2px`,
    }}
    >
      <span>
        #:
        {todo.id}
      </span>
      <h4>
        TODOS:
        {todo.title}
        <br/>
        STATUS:
        {completedStyle()}
      </h4>
      <User user={todo.user}/>
    </div>
  );
};

export default Todoitem;
