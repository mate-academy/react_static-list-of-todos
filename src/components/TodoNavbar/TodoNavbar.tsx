import '../../styles/components/TodoNavbar.scss';
import {
  Button,
  Navbar,
  Container,
  Form,
  FormControl,
} from 'react-bootstrap';
import { TodoDate } from '../../api/time';

export const TodoNavbar = () => {
  const today = new TodoDate();

  return (
    <Navbar className="TodoNavbar" bg="danger" variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand
          href="#"
          className="TodoNavbar__title d-flex align-items-center"
        >
          {'TodoList | '}

          <span
            className="
            TodoNavbar__date
            d-inline-flex
            flex-column
            ms-2
            "
          >
            {TodoDate.getTodayMessage()}

            <span className="TodoNavbar__date-weekday">
              {TodoDate.getWeekDayOf(today)}
            </span>
          </span>
        </Navbar.Brand>

        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Enter your todo..."
            className="me-2"
            aria-label="Search"
          />

          <Button className="TodoNavbar__button me-2" variant="light">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};
