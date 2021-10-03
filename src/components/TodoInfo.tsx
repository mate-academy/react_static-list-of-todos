import React from 'react';

type Props = {
  title: string
  completed: boolean
};

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
}) => (
  <>
    <td>
      {title}
    </td>
    <td>
      <input
        type="checkbox"
        checked={completed}
      />
    </td>
  </>
);
