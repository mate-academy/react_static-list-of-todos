import React from 'react';
import { TodoShape } from '../shapes/TodoShape';

import { User } from '../User';

export const Todo = ({ id, completed, title, user }) => (
  <li key={id} className="ListRow">
    <input
      type="checkbox"
      checked={completed}
      readOnly
      className="ListRow__input"
    />

    <div className="ListRow__description">
      {title}
    </div>

    <User {...user} />
  </li>
);

Todo.propTypes = TodoShape;
