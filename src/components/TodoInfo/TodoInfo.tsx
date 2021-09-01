import React from 'react';
import classNames from 'classnames';
import { Todo } from '../Type/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  element: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { element } = props;
  const { title, completed, user } = element;

  return (
    <>
      {user && <UserInfo user={user} /> }

      <div className="list_item list_item-title">
        {title}
      </div>
      <div className={classNames(
        'list_item',
        { 'list_item--completed': completed },
      )}
      >
        {completed ? 'Done' : 'still working'}
      </div>
    </>
  );
};
