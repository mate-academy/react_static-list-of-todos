import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

import { Todo } from '../../types/Interfaces';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div>
    <Card border="secondary" style={{ width: '18rem' }}>
      <Card.Header>{todo.title}</Card.Header>
      <Card.Body>
        {todo.user
          && (
            <>
              <Card.Title id="user">
                name:
                {' '}
                {todo.user.name}
              </Card.Title>
              <Card.Title id="user">
                E-mail:
                {' '}
                {todo.user.email}
              </Card.Title>
            </>
          )}
        <Card.Text>
          {todo.completed
            ? <Button variant="success">Done</Button>
            : <Button variant="danger">Undone</Button>}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);
