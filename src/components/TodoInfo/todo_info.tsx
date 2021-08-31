import React from 'react';
import classNames from 'classnames';
import { Todo } from '../Type/Todo';

type Props = {
  element: Todo;
};

export const TodoInfo: React.FC<Props> = ({ element }) => {
  const { title, completed } = element;

  return (
    <>
      <div className="list_item list_item-title">
        {title}
      </div>
      <div className={classNames(
        'list_item',
        { 'list_item--true': completed === true },
      )}
      >
        {completed ? 'Done' : 'still working'}
      </div>
    </>
  );
};
