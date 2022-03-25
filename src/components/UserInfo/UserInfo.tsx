import { FC } from 'react';

interface Props {
  name: string;
  email: string;
}

export const UserInfo: FC<Props> = ({ name, email }) => (
  <>
    {`Userinfo: ${name}, ${email}`}
  </>
);
