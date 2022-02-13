import React from 'react';
import classNames from 'classnames';
import './TodoInfo.scss';

type Props = {
  title: string;
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <p>{title}</p>
    <p
      className={classNames(
        'todoStatus',
        {
          completed,
        },
      )}
    >
      {`Completed: ${completed}`}
    </p>
  </>
);
