type Props = {
  user: {
    name: string
    email: string
  } | undefined
} ;

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user && (
      <>
        <p>
          Name:
          {` ${user.name}`}
        </p>

        <p>
          Email:
          <a href="mailto">{` ${user.email}`}</a>
        </p>

      </>
    )}
  </>
);
