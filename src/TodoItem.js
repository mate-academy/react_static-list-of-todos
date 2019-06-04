import React from 'react';
import User from './User';

function TodoItem(props) {
  const article = props.article;
  return (
    <tr>
      <td>{article.title}</td>
      <User id={article.userId}/>
      <td>{`${article.completed}`}</td>
    </tr>
  )
}

export default TodoItem;
