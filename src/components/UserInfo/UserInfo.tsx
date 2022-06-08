import { FC } from 'react';

interface UserInfoProps {
  id: number;
  name: string | null | undefined;
  email: string | null | undefined;
  company: string | null | undefined;
}

export const UserInfo: FC<UserInfoProps> = ({
  id,
  name,
  email,
  company,
}) => {
  return (
    <table className="table table-sm table-success">
      <thead>
        <tr>
          <th scope="col">NAME</th>
          <th scope="col">EMAIL ADDRESS</th>
          <th scope="col">COMPANY</th>
        </tr>
      </thead>
      <tbody key={id}>
        <tr>
          <td data-cy="username">{name}</td>
          <td data-cy="email">{email}</td>
          <td>{company}</td>
        </tr>
      </tbody>
    </table>
  );
};
