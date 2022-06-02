import { FC } from 'react';
// import { Company } from '../../appTypeDef';

// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)

interface UserInfoProps {
  id: number;
  name: string;
  email: string;
  company: string;
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

// Add a default export statement for UserInfo component to use it in the other files
