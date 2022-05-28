import React from 'react';

type Props = {
  phone: string,
};

export const User: React.FC<Props> = ({ phone }) => (
  <>
    {phone}
  </>
);
