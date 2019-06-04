import React from 'react';
import {todos} from './todos';
import {users} from './users';
import User from './User';
import TodoItem from './TodoItem';
import './TodoList.css'

function TodoList() {
  const authors = users;
  const articles = todos;
  let list = authors.map(autor => { 
   return articles.map( article => {
      if(autor.id===article.userId) {
      return ( <article key={article.title}>
          <TodoItem title={article.title}/>
          <User name={autor.name} email={autor.email}/>
        </article>);
      }
    })
  })
  return list;
}

export default TodoList;