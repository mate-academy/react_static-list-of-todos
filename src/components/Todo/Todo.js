import React from 'react';
import { TodoShape } from '../shapes/TodoShape';

import { User } from '../User';

export const Todo = ({ completed, title, user }) => (
  <>
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
  </>
);

Todo.propTypes = TodoShape;
