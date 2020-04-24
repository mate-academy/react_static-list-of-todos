import React from 'react';
import PropTypes from 'prop-types';
import './todoListItem.css';

function TodoListItem(props) {
   const t = props.todoItem;
  const user = props.users.find(u => {
    return t.userId === u.id;
  });
  let liClass = `item ${(t.completed ? "done" : "notReady")}`;
  return (
    <li key={t.id} className={liClass}>
      <p>{t.title}</p>
      <h1 className="title">{user.name}</h1>
      <p className={(t.completed ? "done" : "notReady")}></p>
    </li>
  )
}

TodoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoListItem;
