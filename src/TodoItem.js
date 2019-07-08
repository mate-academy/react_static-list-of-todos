import React from 'react';
import User from './User';

const TodoItem = ({ itemData }) => (
  <div>
    <User userData={itemData.user} />
    {itemData.title}
    <input type="checkbox" checked={itemData.completed} />
  </div>
);

export default TodoItem;
