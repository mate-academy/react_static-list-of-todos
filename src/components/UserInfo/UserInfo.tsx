interface Adress {
  street?: string,
  suite?: string,
  city?: string,
  zipcode?: string,
  geo?: { lat?: string, Ing?: string },
}
export interface User {
  id?: number,
  name?: string,
  username?: string,
  email?: string,
  phone?: string,
  website?: string,
  address?: Adress,
  company?: { name?:string, catchPhrase?: string, bs?: string }
}

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <p>
      <span>{`${name}'s email: ${email}`}</span>
    </p>
  </>
);
