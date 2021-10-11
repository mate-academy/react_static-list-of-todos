import React from 'react';

type PInfo = {
  propsInfo: boolean | null;
};

export const TodoInfo: React.FC<PInfo> = ({ propsInfo }) => (
  <>
    <span>
      {`${propsInfo}`}
    </span>
  </>
);
