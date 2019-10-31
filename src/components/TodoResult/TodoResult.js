import React from 'react';
import './todoResult.css';

const TodoResult = ({ result }) => (
  <td className={
    result ? "todo__cell todo__cell_completed" : "todo__cell todo__cell_failed"
  }>
    {result ? "Hell yeah!)" : "Oh no"}
  </td>
);

export default TodoResult;
