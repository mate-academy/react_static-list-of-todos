import React from 'react';
import './GetInfo.scss';

type PropsInfo = {
  propsInfo: string | null;
};
export const GetInfo: React.FC<PropsInfo> = ({ propsInfo }) => (
  <>
    <div className="InfoStyle">
      {propsInfo}
    </div>
  </>
);
