// import { User } from '../../types/User';

// type Props = {
//   users: User[],
// };

// export const UserInfo:React.FC<Props> = ({ users }) => (
//   <>

//     {users.map(user => (
//       <a
//         className="UserInfo"
//         href={`mailto:${user.email}`}
//         key={user.id}
//       >
//         {user.name}
//       </a>

//     // <a className="UserInfo" href={email}>
//     // {name}
//     // </a>
//     ))}

//   </>
// );

import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user && (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )}
  </>
);
