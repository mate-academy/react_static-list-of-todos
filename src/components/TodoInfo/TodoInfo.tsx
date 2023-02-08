import { UserInfo } from '../UserInfo';
import { User } from '../../types/User';

type Propss = {
  title: string;
  person: User | null ;
};

export const TodoInfo: React.FC<Propss> = ({ title, person }) => (
  <article className="TodoInfo TodoInfo--completed">
    <h2 className="TodoInfo__title">{title}</h2>
    {
      person && (
        <UserInfo
          name={person.name}
          email={person.email}
        />
      )
    }
  </article>
);
