import React from 'react';
import { User } from './User';

let result = 'false';

export const Todo = (element) => {
  if (element.completed) {
    result = 'true';
  }

  return (
    <div className="todo">
      <h2>{element.title}</h2>
      <p>{result}</p>
      <User {...element.user} />
    </div>
  );
};
