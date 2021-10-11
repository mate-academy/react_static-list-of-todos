import React from 'react';

type Props = {
  status: boolean;
  title: string;
};

export const TodoInfo: React.FC<Props> = props => (
  <>
    <span>
      {'Task: '}
      {props.title}
    </span>
    <span>
      {'Status: '}
      {props.status ? 'Completed' : 'In progress'}
    </span>
  </>
);
