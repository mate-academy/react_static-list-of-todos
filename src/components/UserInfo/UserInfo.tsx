import { User } from '../../types/User';

type Users = {
  userinf: User;
};

export const UserInfo : React.FC<Users> = ({ userinf }) => (
  <a className="UserInfo" href={`mailto:${userinf.email}`}>
    {userinf.name}
  </a>
);
